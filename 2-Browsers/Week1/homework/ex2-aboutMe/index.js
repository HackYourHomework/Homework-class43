'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.getElementById('nickname').textContent = 'Ela';
document.getElementById('fav-food').textContent = 'Fish n Chips';
document.getElementById('hometown').textContent = 'Ndola';
const list = document.getElementsByTagName('li');
for (let i = 0; i < list.length; i++) {
  list[i].className = 'list-item';
}
