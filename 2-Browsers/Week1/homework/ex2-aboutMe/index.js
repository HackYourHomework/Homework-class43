'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickname = document.querySelector('#nickname');
nickname.textContent = 'tomriddle';
const favfood = document.querySelector('#fav-food');
favfood.textContent = 'pizza';
const hometown = document.querySelector('#hometown');
hometown.textContent = 'Baku';

const ul = document.querySelector('ul');
const li = ul.querySelectorAll('li');

li.forEach((element) => {
  element.classList.add('list-item');
});
