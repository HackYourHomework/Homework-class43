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
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

async function fetchAndPopulatePokemons(url, selectElement) {
  try {
    const data = await fetchData(url);
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.text = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
    imgElement.alt = 'pokemon';
  } catch (error) {
    console.error('Error:', error);
  }
}

function main() {
  window.addEventListener('load', () => {
    const selectElement = document.getElementById('pokemon-select');
    const imgElement = document.getElementById('pokemon-image');

    fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon',
      selectElement
    );
    selectElement.addEventListener('change', () => {
      const selectedPokemon = selectElement.value;
      const url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;

      fetchImage(url, imgElement);
    });
  });
}
main();
