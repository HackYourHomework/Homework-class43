'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(() => rollDie());
  return Promise.race(promises);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const results = await rollDice();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}
/*
The reason is that Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as the first promise in the array resolves or rejects. 

Unlike Promise.all() which waits for all promises to resolve, Promise.race() only waits for the fastest promise to resolve. This means that even if some promises haven't resolved yet, the result of the first resolved promise will be used.

 Promise.race() allows you to handle the result of the fastest promise and continue with the rest of your code.
 -The dice continued rolling after the promise is that the promises for rolling the the dice are scheduled to execute immediately upon creation. Promise.race() determines the winner, but it doesn't stop the ongoing execution of the remaining promises. They continue rolling independently until they complete their execution.
*/

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
