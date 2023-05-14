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
// create a button with class btn-pokemon
const button = document.createElement('button');
button.classList.add('btn-pokemon');
button.setAttribute('type', 'button');
button.textContent = 'Get Pokemon!';
document.body.appendChild(button);

// create a select element with class pokemons-list
const selectPokemons = document.createElement('select');
selectPokemons.classList.add('pokemons-list');
document.body.appendChild(selectPokemons);

function fetchData(url) {
  console.log(url); // check the console for the URL
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        if (!data.ok) {
          throw new Error(
            'There is no server at the modified url, therefore this should result in a network (DNS) error.'
          );
        }
        return data.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(`There was a problem with the fetch request: ${error.message}`);
      });
  });
}

function fetchAndPopulatePokemons(data) {
  console.log(data); // check the console for the data
  const pokemonList = data.results;
   
  // choose pokemons from the selected list
  pokemonList.forEach((pokemon, index) => {
    const option = document.createElement('option');
    option.text = pokemon.name;
    selectPokemons.add(option, index);
  });
  document.body.appendChild(selectPokemons);
  button.setAttribute('disabled', true);
  // added event listener to selectPokemons
  selectPokemons.addEventListener('change', (e) => {
    const name = e.target.value;
    fetchImage(name);
  });
}

async function fetchImage(name) {
  // check name for null
  if (name) {
    // read the documentation and get the url for the image
  const pokemonListUrl = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (pokemonListUrl.sprites.front_default) {
    let imgPokemon = document.querySelector('.pokemon-image');
    if (!imgPokemon) { // need to create an img element and choose it
      imgPokemon = document.createElement('img');
      imgPokemon.classList.add('pokemon-image');
      document.body.appendChild(imgPokemon);
    }
    imgPokemon.src = pokemonListUrl.sprites.front_default; // set the src
  }
}
}

async function main() {
  try {
    await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151').then(
      (data) => {
        button.addEventListener('click', () => {
          fetchAndPopulatePokemons(data);
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener('load', main);
