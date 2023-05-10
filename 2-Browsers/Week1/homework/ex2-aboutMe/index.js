// 'use strict';

// const { Linter } = require("eslint");

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

const myInfo = {
  nickname: 'Mehran',
  Favfood: 'Lasagna',
  hometown: 'Breda',
};

document.getElementById('nickname').textContent = myInfo.nickname;
document.getElementById('fav-food').textContent = myInfo.Favfood;
document.getElementById('hometown').textContent = myInfo.hometown;

let liEl = document.querySelectorAll('li');
liEl.forEach((element) => (element.className = 'list-item'));
