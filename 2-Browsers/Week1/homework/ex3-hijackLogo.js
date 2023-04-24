'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo(url) {
  // Create a new link element
  const link = document.createElement('a');
  link.href = url;

  // Create a new image element
  const img = document.createElement('img');
  img.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  img.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  img.alt = 'Hack Your Future logo';
  img.height = 92;
  img.width = 272;

  // Find the existing logo element
  const logo = document.querySelector('.lnXdpd');
  if (logo) {
    // Change the logo style to display:none
    logo.style.display = 'none';

    // Append the new image to the new link element
    link.appendChild(img);

    // Replace the existing logo element with the new link element
    logo.parentElement.replaceChild(link, logo);
  }
}

hijackGoogleLogo('https://www.google.com/');
