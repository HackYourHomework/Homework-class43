'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

// TODO Remove callback and return a promise
function rollDie() {
  return new Promise((res, rej) => {
    // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      // Compute a random die value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      // Use callback to notify that the die rolled off the table after 6 rolls
      if (roll > 6) {
        return rej(new Error('Oops... Die rolled off the table.'));
      }

      // Use callback to communicate the final die value once finished rolling
      if (roll === randomRollsToDo) {
        res(value);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    // Start the initial roll
    rollOnce(1);
  });
}

function main() {
  // TODO Refactor to use promise
  rollDie()
    .then((res) => console.log(`Success! Die settled on ${res}.`))
    .catch((error) => console.error(error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*
The problem: when the die roll above 6, it muse die and we shoud expect an error message, however we 
are getting error and sucess message
The case (when using callback): This happens because when we die dies, the function rollOnce() called 
again, on other word, when we get an error using callback, the code does not stop excuiting
The case (when using Promise): Since promises offers the power of chains, when we reach an error,
(rejection), the code will stop excuting so the problem will resolved, since the promise will wait to
get a response or an error
*/
