'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week4#exercise-4-observable

Complete the `createObservable()` function as follows:

------------------------------------------------------------------------------*/
function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      subscribers.push(subscriber);
    },
    notify: function (message) {
      subscribers.forEach(function (subscriber) {
        subscriber(message);
      });
    },
  };
}

// ! Do not change or remove the code below
module.exports = createObservable;
