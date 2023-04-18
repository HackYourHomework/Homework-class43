'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const currentTime = document.createElement('div');

  setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;

    currentTime.textContent = timeString;
    currentTime.style.backgroundColor = '#f2f2f2';
    currentTime.style.textAlign = 'center';
    currentTime.style.fontSize = '100px';
    document.body.appendChild(currentTime);
  }, 1000);
}

window.addEventListener('DOMContentLoaded', addCurrentTime);
