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
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchData(url) {
  // TODO complete this function
  try {
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    } else {
      // console.log(response.json());
      return await response.json();
    }
  } catch (error) {
    console.log(`Network error: ${error}`);
  }
}
const pokemonDropdown = document.querySelector('.pokemonDropdown');
const selectElem = document.createElement('select');
pokemonDropdown.append(selectElem);
async function fetchAndPopulatePokemons() {
  const data = await fetchData(baseUrl);

  for (const item of data.results) {
    const optionElem = document.createElement('option');
    selectElem.append(optionElem);
    optionElem.textContent = item.name;
  }
}
async function fetchImage() {
  const selectedPokemon = selectElem.value;
  if (selectedPokemon) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
    const data = await fetchData(pokemonUrl);
    const imgHolder = document.querySelector('.imgHolder');
    imgHolder.textContent = '';
    const imgElem = document.createElement('img');
    imgHolder.append(imgElem);
    imgElem.src = data.sprites.front_default;
  }
}
async function main() {
  try {
    const getPokemonBtn = document.querySelector('.getPokemonBtn');
    getPokemonBtn.addEventListener(
      'click',
      async () => await fetchAndPopulatePokemons()
    );
    selectElem.addEventListener('change', fetchImage);
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', main);
