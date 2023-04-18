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

const imgEl = document.getElementsByTagName('img')[0];
imgEl.style.left = '0px';
function catWalk() {
  // TODO complete this function
  imgEl.style.left = parseInt(imgEl.style.left) + 10 + 'px';
  let currentLeftPosition = parseInt(imgEl.style.left);
  imgEl.style.left = currentLeftPosition + 10 + 'px';
  if (currentLeftPosition > window.innerWidth - imgEl.width) {
    imgEl.style.left = '0px';
  }
  if (
    currentLeftPosition >= (window.innerWidth - imgEl.width) / 2 &&
    currentLeftPosition <= window.innerWidth / 2
  ) {
    clearTimeout();

    imgEl.src =
      ' https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    currentLeftPosition = (window.innerWidth - imgEl.width) / 2;
    setTimeout(function () {
      imgEl.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      currentLeftPosition = (window.innerWidth - imgEl.width) / 2;
    }, 5000);
  }
}

// TODO execute `catWalk` when the browser has completed loading the page
window.setInterval(catWalk, 50);
