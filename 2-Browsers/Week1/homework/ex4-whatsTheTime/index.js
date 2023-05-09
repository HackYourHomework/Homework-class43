'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  // Get body element
  const bodyEl = document.querySelector('body');
  // Make a div element to show the time
  const showTime = document.createElement('div');
  // Create a function to get currentTime
  function currentTime() {
    // Creat a variable to get date
    let now = new Date();
    // Define hours and makes hour HH: notation with padStart!
    let hour = now.getHours().toString().padStart(2, '0');
    // Define minute and makes hour HH: notation with padStart!
    let minute = now.getMinutes().toString().padStart(2, '0');
    // Define second and makes hour HH: notation with padStart!
    let second = now.getSeconds().toString().padStart(2, '0');
    // Get currentTime HH:MM:SS
    let time = `${hour}:${minute}:${second}`;
    // Append show current time element to body
    bodyEl.appendChild(showTime);
    // Display current time to browser
    showTime.textContent = time;
  }
  //Use `setInterval()` to make sure the time stays current per seconds
  setInterval(currentTime, 1000);
}
// TODO execute `addCurrentTime` when the browser has completed loading the page
// Executes the addCurrentTime function when the event occurs.
window.addEventListener('load', addCurrentTime);
