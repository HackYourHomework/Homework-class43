/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollDice()` function to throw five dice in one go, by 
    using `.map()` on the `dice` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Die 3 rolled off the table.

The provided rollDie() function logs the value of a die as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dice 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dice that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map((die) => rollDie(die));
  return Promise.all(promises)
    .then((results) => {
      return results;
    })
    .catch((error) => {
      throw error;
    });
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

/*In the case of a rejected promise, the Promise.all() method immediately rejects with the error and
 any pending promises are terminated. However, the rollDie() function uses asynchronous code that has already been dispatched, 
 so those asynchronous operations may continue to execute even after the rejection has occurred. 
 Therefore, the resolved or rejected status of a promise does not affect the asynchronous operations that have already been dispatched, 
they will continue to run until they are completed or rejected.*/
