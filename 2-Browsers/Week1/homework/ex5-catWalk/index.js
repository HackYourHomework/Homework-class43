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

const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '0px';

function catWalk() {
  const currentLeft = parseInt(cat.style.left);
  const newLeft = currentLeft + 10;

  if (newLeft >= window.innerWidth / 2 - cat.width / 2 && !cat.isDancing) {
    cat.isDancing = true;
    cat.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    setTimeout(() => {
      cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      cat.isDancing = false;
    }, 4000);
  }

  if (newLeft > window.innerWidth) {
    cat.style.left = cat.width * -1 + 'px';
    cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  } else {
    cat.style.left = newLeft + 'px';
  }
}

setInterval(catWalk, 50);
window.addEventListener('load', catWalk);
