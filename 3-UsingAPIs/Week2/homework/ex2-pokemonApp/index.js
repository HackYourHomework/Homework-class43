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
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Network error: ${error}`);
      throw error;
    });
}

function fetchAndPopulatePokemons(url, selectElement) {
  return fetchData(url)
    .then((data) => {
      data.results.forEach((pokemon) => {
        const optionElement = document.createElement('option');
        optionElement.textContent = pokemon.name;
        optionElement.value = pokemon.url;
        selectElement.appendChild(optionElement);
      });
    })
    .catch((error) => {
      console.error(`Error fetching pokemons: ${error}`);
    });
}

function fetchImage(url, imgElement) {
  return fetchData(url)
    .then((data) => {
      imgElement.src = data.sprites.front_default;
    })
    .catch((error) => {
      console.error(`Error fetching image: ${error}`);
    });
}

async function main() {
  const selectElement = document.getElementById('pokemon-select');
  const imgElement = document.getElementById('pokemon-image');

  try {
    await fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
      selectElement
    );

    selectElement.addEventListener('change', async () => {
      const url = selectElement.value;
      await fetchImage(url, imgElement);
    });

    await fetchImage(selectElement[0].value, imgElement);
  } catch (error) {
    console.error(`Unexpected error: ${error}`);
  }
}

window.addEventListener('load', main);
