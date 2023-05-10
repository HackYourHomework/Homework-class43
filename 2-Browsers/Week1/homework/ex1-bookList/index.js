//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const ulElement = Object.assign(document.createElement('ul'), {
    className: 'ul-element'
  })
  // Iterate through the array of books
  books.forEach((book) => {
    // Create <p>, <li>, <img> elements
    const liElement = Object.assign(document.createElement('li'), {
      className: 'li-element'
    })

    const pElement = document.createElement('p');
    const imageElement = document.createElement('img');

    const imageName = book.title.toLowerCase().replaceAll(' ', '_')
    imageElement.src = `./assets/${imageName}.jpg`;
    imageElement.alt = book.title;
    // Change the style of the book depending on whether you have read it(green) or not(red).

    if (book.alreadyRead === true) {
      liElement.style.background = 'green';
    } else {
      liElement.style.background = 'red';
    }
    // Display my three favorite books
    pElement.textContent = `${book.title} by ${book.author}`;

    // Append elements to eachother
    ulElement.append(liElement);
    liElement.appendChild(pElement);
    liElement.appendChild(imageElement);
  });

  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
