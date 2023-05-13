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

const BUTTON = document.getElementById('pokemon-btn');

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        if (data.status === 200) {
          return resolve(data.json());
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function fetchAndPopulatePokemons(data) {
  const selectElement = document.createElement('select');
  selectElement.classList.add('select-list');
  const pokemons = data.results;
  pokemons.forEach((pokemon, index) => {
    selectElement.add(new Option(pokemon.name, index));
  });
  document.querySelector('body').appendChild(selectElement);
  BUTTON.disabled = true;
  selectElement.addEventListener('change', (e) => {
    fetchImage(pokemons[e.target.value].url, pokemons[e.target.value].name);
  });
}

const createImage = (alt = 'Pokemon Image') => {
  const pokemonImage = new Image();
  pokemonImage.classList.add('image');
  pokemonImage.alt = alt;
  document.querySelector('body').appendChild(pokemonImage);
  return pokemonImage;
};

async function fetchImage(url, name) {
  await fetchData(url).then((res) => {
    let imageIsExists = document.getElementsByClassName('image')[0];
    if (imageIsExists === undefined) imageIsExists = createImage(name);
    imageIsExists.src = res.sprites.front_shiny;
  });
}

async function main() {
  try {
    await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151').then((data) => {
      BUTTON.addEventListener('click', () => {
        fetchAndPopulatePokemons(data);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', main);
