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
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndPopulatePokemons(url) {
  const data = await fetchData(url);
  const select = document.createElement('select');
  document.body.appendChild(select);
  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element.name;
    option.value = element.url;
    select.appendChild(option);
  });

  const img = document.createElement('img');
  document.body.appendChild(img);

  select.addEventListener('change', () => {
    const selectedElement = event.target.value;
    fetchImage(selectedElement);
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
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get Pokemon!';
  document.body.appendChild(button);

  function buttonClick() {
    fetchAndPopulatePokemons(url);
    button.removeEventListener('click', buttonClick);
  }

  button.addEventListener('click', buttonClick);
}

window.addEventListener('load', main);
