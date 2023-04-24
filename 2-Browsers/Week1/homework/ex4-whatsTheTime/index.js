'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  //Create setInterval function
  setInterval(function () {
    // get variables time and current time
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // add time to the webpage format HH:MM:SS
    const timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');

    // add current time to the webpage id 'current-time'
    const currentTime = document.getElementById('current-time');
    currentTime.style.margin = '20px';
    // current time always show
    currentTime.textContent = timeString;
    console.log(timeString);
  }, 1000);
}

// Add current time to the webpage
window.onload = addCurrentTime;
