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
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndPopulatePokemons(url, select) {
  const data = await fetchData(url);
  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element.name;
    option.value = element.url;
    select.appendChild(option);
  });
}

async function fetchImage(url) {
  const data = await fetchData(url);
  const img = document.querySelector('img');
  img.src = data.sprites.front_default;
  img.alt = data.name;
}

async function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const select = document.createElement('select');
  const img = document.createElement('img');
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get Pokemon!';

  document.body.appendChild(button);
  document.body.appendChild(select);
  document.body.appendChild(img);

  async function buttonClick() {
    await fetchAndPopulatePokemons(url, select);
  }

  button.addEventListener('click', buttonClick);

  select.addEventListener('change', () => {
    const selectedElement = select.value;
    fetchImage(selectedElement);
  });
}

window.addEventListener('load', main);
