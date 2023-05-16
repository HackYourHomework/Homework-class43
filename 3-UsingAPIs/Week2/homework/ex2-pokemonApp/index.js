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

// create button with id btn
const button = document.createElement(`button`);
button.setAttribute(`id`, `btn`);
button.setAttribute(`type`, `submitt`);
button.textContent = `Get Pokemon!`;
document.body.appendChild(button);
// create a sellect buttun with id sellect
const selectElement = document.createElement(`select`);
selectElement.setAttribute(`id`, `select`);
selectElement.setAttribute(`name`, `mySelect`);
document.body.appendChild(selectElement);

const imgElement = document.createElement('img');
imgElement.setAttribute('id', 'pokemonImage');
imgElement.setAttribute(
  'src',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
);
imgElement.setAttribute('alt', '');
document.body.appendChild(imgElement);

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchData(url) {
  // console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network 
      errors:${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
fetchData(url)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

function fetchAndPopulatePokemons(data) {
  const pokemonList = data.results;
  // console.log('jjjjjjjjjjjjjjjjjjjjjjjjj', pokemonList);
  pokemonList.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.name;
    option.textContent = pokemon.name;
    selectElement.appendChild(option);
  });

  //add event lisner to select pokemon
  selectElement.addEventListener('change', (ele) => {
    // console.log(ele);
    console.log('ppppppppppppppppp', ele.target);
    // console.log('ele.target.value : ', ele.target.value);
    const name = ele.target.value;
    console.log(name);

    const urlImage = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetchImage(urlImage);
  });
}

async function fetchImage(imgUrl) {
  try {
    const result = await fetchData(imgUrl);
    console.log('kkkkkkkkkkkkkkkkkkkkkk', result);
    const imageUrl = result.sprites.front_default;
    const pokemonImage = document.getElementById('pokemonImage');
    pokemonImage.src = imageUrl;
  } catch (error) {
    console.error(error);
  }
}
fetchImage(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);

async function main() {
  try {
    await fetchData(url).then((data) => {
      button.addEventListener('click', () => {
        fetchAndPopulatePokemons(data);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

window.onload = main();
