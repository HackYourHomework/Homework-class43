'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-1-programmer-fun

1. Complete the function `requestData()` using `fetch()` to make a request to 
   the url passed to it as an argument. The function should return a promise. 
   Make sure that the promise is rejected in case of HTTP or network errors.
2. Notice that the function `main()` calls `requestData()`, passing it the url 
   `https://xkcd.now.sh/?comic=latest`. Try and run the code in the browser and 
   open the browser's console to inspect the data returned from the request.
3. Next, complete the function `renderImage()` to render an image as an `<img>` 
   element appended to the document's body, using the data returned from the API.
4. Complete the function `renderError()` to render any errors as an `<h1>` 
   element appended to the document's body.
5. Refactor the `main()` function to use `async/await`.
6. Test error handling, for instance, by temporarily changing the `.sh` in the 
   url with `.shx`. There is no server at the modified url, therefore this 
   should result in a network (DNS) error.
------------------------------------------------------------------------------*/
async function requestData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP or network errors', response.status);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log('err', error);
    throw error;
  }
}

function renderImage(data) {
  const imageElement = document.createElement('img');
  imageElement.src = data;
  imageElement.alt = data;
  document.body.appendChild(imageElement);
}

function renderError(error) {
  const errorElement = document.createElement('h1');
  errorElement.textContent = 'Error! something went wrong' + error;
  document.body.appendChild(errorElement);
  console.log(error);
}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    const imageUrl = data.img;
    renderImage(imageUrl);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
