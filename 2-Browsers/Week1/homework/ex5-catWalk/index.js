'use strict';

const imgElem = document.querySelector('img');
const imgWidth = 320;
let catPosition = 0;
let interval;
let timeout;

function catWalk() {
  catPosition += 10;
  const rightStep = catPosition;

  if (rightStep > window.innerWidth - imgWidth) {
    catPosition = 0;
  } else if (
    rightStep >= window.innerWidth / 2 - 5 &&
    rightStep <= window.innerWidth / 2 + 5
  ) {
    clearInterval(interval);

    imgElem.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      imgElem.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      catPosition = rightStep + 10;
      interval = setInterval(catWalk, 50);
    }, 5000);
  } else {
    imgElem.style.left = rightStep + 'px';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  imgElem.style.left = '0px';
  interval = setInterval(catWalk, 50);
});
