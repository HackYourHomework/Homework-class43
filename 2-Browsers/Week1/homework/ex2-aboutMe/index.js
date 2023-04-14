'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
// Create span query selector
const nickname = document.querySelector('#nickname');
// new content of span
nickname.textContent = 'YenhenRight';
// Create span query selector
const favFood = document.querySelector('#fav-food');
// new content of span
favFood.textContent = 'Pasta with cheese';
// Create span query selector
const hometown = document.querySelector('#hometown');
// new content of span
hometown.textContent = 'Amsterdam';

//Create query selectorALL const listItems
const listItems = document.querySelectorAll('li');

// Iterate through listItems and change class
listItems.forEach((list) => {
  list.className = 'list-item';
});
