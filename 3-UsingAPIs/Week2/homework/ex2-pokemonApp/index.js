'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
const mainBody = document.getElementsByTagName('body')[0];

const buttonGetPokemon = document.createElement('button');
buttonGetPokemon.textContent = 'Get Pokemon';
mainBody.appendChild(buttonGetPokemon);

buttonGetPokemon.addEventListener('click', () => {
  const imgToRemove = document.getElementsByTagName('img')[0];
  const selectToRemove = document.getElementsByTagName('select')[0];
  mainBody.removeChild(imgToRemove);
  mainBody.removeChild(selectToRemove);

  main();
});

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
          reject(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function updatePokeImg(e) {
  const myBody = document.getElementsByTagName('body')[0];
  const imgToRemove = document.getElementsByTagName('img')[0];
  myBody.removeChild(imgToRemove);
  fetchImage(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
}

async function fetchAndPopulatePokemons(url) {
  const pokes = await fetchData(url);

  const mySelect = document.createElement('select');
  const myBody = document.getElementsByTagName('body')[0];
  myBody.appendChild(mySelect);
  mySelect.addEventListener('change', updatePokeImg);

  pokes.results.forEach((element) => {
    const myOption = document.createElement('option');
    myOption.value = element.name;
    myOption.textContent = element.name;
    mySelect.appendChild(myOption);
  });

  fetchImage(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
}

async function fetchImage(imgUrl) {
  const myBody = document.getElementsByTagName('body')[0];
  const result = await fetchData(imgUrl);
  const pocImgUrl = result.sprites.front_default;
  const myImg = document.createElement('img');

  myImg.src = pocImgUrl;
  myImg.alt = 'Pokemon image.';
  myBody.append(myImg);
}

function main() {
  try {
    fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
