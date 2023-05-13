'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nicknameSpan = document.getElementById('nickname');
nicknameSpan.textContent = 'Maikary';

const foodSpan = document.getElementById('fav-food');
foodSpan.textContent = 'Salad';
const hometownSpan = document.getElementById('hometown');
hometownSpan.textContent = 'Damascus';

const listItems = document.querySelectorAll('li');
console.log(listItems);

listItems.forEach((element) => {
  element.classList.add('list-item');
});
