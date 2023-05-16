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
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP or network error: ' + response.status);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log('Show error', error);
    throw error;
  }
}

async function fetchAndPopulatePokemons(data) {
  const pokemonSelect = document.getElementById('pokemonSelect');
  const selectButton = document.querySelector('.selectButton');

  selectButton.addEventListener('click', async () => {
    try {
      const getPokemonData = await fetchData(data);
      const getPokemonNames = getPokemonData.results.map(
        (pokemon) => pokemon.name
      );
      pokemonSelect.textContent = '';

      getPokemonNames.forEach((name) => {
        const option = document.createElement('option');
        option.classList.add('listItemNames');
        option.textContent = name;
        pokemonSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

function fetchImage(url) {
  const imageElement = document.getElementById('pokemonImage');
  imageElement.src = url;
}

async function main() {
  const data = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  fetchAndPopulatePokemons(data);

  const pokemonSelect = document.getElementById('pokemonSelect');
  pokemonSelect.addEventListener('change', async () => {
    try {
      const selectedPokemonName = pokemonSelect.value;
      const pokemonData = await fetchData(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`
      );
      const imageUrl = pokemonData.sprites.front_default;
      fetchImage(imageUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

window.addEventListener('load', main);
