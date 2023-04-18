'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const myInfo = {
  nickname: 'Alya',
  'fav-food': 'sushi',
  hometown: 'Cherkassy',
};
function createMyData() {
  const myData = document.querySelectorAll('span');
  console.log(myData);
  for (const child of myData) {
    child.textContent = myInfo[child.id];
  }
}
// TODO add your JavaScript code here.
createMyData();
