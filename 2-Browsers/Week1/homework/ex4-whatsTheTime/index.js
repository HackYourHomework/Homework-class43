'use strict';

// const { time } = require('systeminformation');
// I commented above line because otherwise it did not work for me, i was having require error when I executed it with live server in Google Chrome.

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const pElement = document.createElement('p');
  document.body.append(pElement);
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    const time = `${hours}:${minutes}:${seconds}`;
    pElement.innerText = time;
    pElement.style.textAlign = 'center';
    pElement.style.color = 'orange';
    pElement.style.fontSize = '70px';

    console.log(time);
  }, 1000);
}

window.addEventListener('load', addCurrentTime);
