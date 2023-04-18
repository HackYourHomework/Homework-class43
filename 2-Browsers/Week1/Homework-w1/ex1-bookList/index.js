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
  // TODO your code goes in here, return the ul element
  const ulElement = document.createElement('ul');
  // Iterate through the array of books
  books.forEach((book) => {
    // Create <p>, <li>, <img> elements
    const liElement = document.createElement('li');
    const pElement = document.createElement('p');
    const imageElement = document.createElement('img');
    // Display my three favorite books
    pElement.textContent = `${book.title} by ${book.author}`;

    // Append elements to eachother
    liElement.appendChild(pElement);
    liElement.appendChild(imageElement);
    ulElement.append(liElement);

    // Change the style of the book depending on whether you have read it(green) or not(red).

    if (book.alreadyRead === true) {
      liElement.style.background = 'green';
    } else {
      liElement.style.background = 'red';
    }

    // Display image with isbn
    if (book.isbn === '978-0465050659') {
      imageElement.src = './assets/the_design_of_everyday_things.jpg';
    }
    if (book.isbn === '978-1617933431') {
      imageElement.src = './assets/the_most_human_human.jpg';
    }
    if (book.isbn === '978-0201616224') {
      imageElement.src = './assets/the_pragmatic_programmer.jpg';
    }
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
