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
const bodyEl = document.getElementsByTagName('body');
const divEl = document.createElement('div');
const buttonEl = document.createElement('button');
buttonEl.textContent = 'Get Pokemon!';
buttonEl.type = 'button';
buttonEl.id = 'pokemon-btn-id';
const selectEl = document.createElement('select');
selectEl.id = 'select-list-id';
bodyEl[0].appendChild(divEl);
divEl.appendChild(buttonEl);
divEl.appendChild(selectEl);

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchAndPopulatePokemons(data) {
  const pokemons = data.result;
  pokemons.forEach((pokemon) => {
    selectEl.add(new Option(pokemon.name));
    buttonEl.disabled = true;
  });
  document.querySelector('body').appendChild(selectEl);
  buttonEl.disabled = true;
  selectEl.addEventListener('change', (e) => {
    const selectedPokemon = pokemons[e.target.value];
    fetchImage(selectedPokemon.url, selectedPokemon.name);
  });
}

async function fetchImage(url) {
  fetchData(url)
    .then((responseData) => {
      const imageUrl = responseData;
      updateImage(imageUrl);
    })
    .catch((error) => {
      console(error);
    });
}
function updateImage(imageUrl) {
  const imgEl = document.createElement('img');
  imgEl.src = imageUrl;
  const previousImgEl = divEl.querySelector('img');
  if (previousImgEl) {
    divEl.removeChild(previousImgEl);
  }
  divEl.appendChild(imgEl);
}

async function main() {
  try {
    await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151').then(
      (data) => {
        buttonEl.addEventListener('click', () => {
          fetchAndPopulatePokemons(data);
        });
      }
    );
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', main);
