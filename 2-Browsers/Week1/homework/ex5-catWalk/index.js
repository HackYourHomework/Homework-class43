'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

// variables for clearInterval and clearTimeout
let intervalId = null;
let timeoutId = null;

// Im wrapping the catWalk() window.onload, because value screen width is undefined, now it is working
window.onload = function () {
  // find the cat image
  const cat = document.querySelector('img[alt="Cat walking"]');
  // screen width
  const screenWidth = window.innerWidth;
  const middleOfScreen = screenWidth / 2;
  // start position cat on screen
  let catPosition = 0;

  function catWalk() {
    // move cat 10 pixels to the right
    catPosition += 10;
    const rightMove = catPosition;
    // logic for when the cat reaches the right-hand of the screen
    if (rightMove > screenWidth) {
      catPosition = 0;
    } else if (rightMove === middleOfScreen) {
      clearInterval(intervalId);
      const originalCatSrc = cat.src;
      cat.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      // start the cat dancing
      timeoutId = setTimeout(() => {
        // clear the interval
        clearTimeout(timeoutId);
        // cat continues the walk
        cat.src = originalCatSrc;
        catPosition = rightMove + 10;
        intervalId = setInterval(catWalk, 50);
      }, 5000);
    } else {
      cat.style.left = rightMove + 'px';
    }
  }

  intervalId = setInterval(catWalk, 50);
};
