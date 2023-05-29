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
      console.log(`HTTP error = ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(`Network error: ${error}`);
  }
}

async function fetchAndPopulatePokemons() {
  const body = document.querySelector('body');

  const divOuter = document.createElement('div');

  const pEl = document.createElement('p');
  pEl.textContent = 'Choose your favorite Pokemon';
  divOuter.appendChild(pEl);

  const button = document.createElement('button');
  button.id = 'getPokemon';
  button.textContent = 'Choose..';
  divOuter.appendChild(button);

  const divInner = document.createElement('div');
  divOuter.appendChild(divInner);

  const select = document.createElement('select');
  divInner.appendChild(select);

  const img = document.createElement('img');
  divOuter.appendChild(img);

  body.appendChild(divOuter);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  try {
    const data = await fetchData(url);
    data.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('Error:', error);
  }

  button.addEventListener('click', async () => {
    button.disabled = true;

    select.addEventListener('change', async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${select.value}`;
      await fetchImage(url);
    });
  });
}

async function fetchImage(url) {
  try {
    const data = await fetchData(url);
    const img = document.querySelector('img');
    img.src = data.sprites.front_default;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function main() {
  await fetchAndPopulatePokemons();
}

window.addEventListener('load', main);
