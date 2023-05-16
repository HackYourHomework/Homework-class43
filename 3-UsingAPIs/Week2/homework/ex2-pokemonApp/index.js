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

function createButton() {
  const button = document.createElement('button');
  button.id = 'pokemon-btn';
  button.textContent = 'Get Pokemon';
  document.querySelector('body').appendChild(button);
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) throw new Error('Could not fetch the data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.errorMessage);
  }
}

function fetchAndPopulatePokemons(data, button) {
  const selectElement = document.createElement('select');
  selectElement.classList.add('select-list');
  const pokemons = data.results;
  pokemons.forEach((pokemon, index) => {
    selectElement.add(new Option(pokemon.name, index));
  });
  document.querySelector('body').appendChild(selectElement);
  button.disabled = true;
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

function main() {
  const button = document.getElementById('pokemon-btn');
  button.addEventListener('click', async () => {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetchAndPopulatePokemons(data, button);
  });
}

window.addEventListener('load', function () {
  createButton();
  main();
});
