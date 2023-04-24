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
  const bookDiv = document.getElementById('bookList');

  books[0].img = 'the_design_of_everyday_things.jpg'; // added img books
  books[1].img = 'the_most_human_human.jpg'; // added img books
  books[2].img = 'the_pragmatic_programmer.jpg'; // added img books

  // create ul element
  const ul = document.createElement('ul');
  //added ul style
  ul.style.padding = '0px';
  ul.style.margin = '0px';

  // Iterate through the array of books.
  books.forEach((book) => {
    // create li element
    const li = document.createElement('li');

    // added li style
    li.style.listStyle = 'none';
    li.style.padding = '8px';
    li.style.margin = '8px';
    li.style.display = 'inline-block';
    li.style.width = '400px';

    // create p element
    const p = document.createElement('p');

    // add book title and author to p element
    p.textContent = `${book.title} by ${book.author}`;

    // add p to li
    li.appendChild(p);

    // create img element
    const img = document.createElement('img');
    img.src = `./assets/${book.img}`; // added img books
    img.alt = book.title;

    // add img to li
    li.appendChild(img);

    if (book.alreadyRead) {
      li.style.backgroundColor = 'green'; // added li style background color
    } else {
      li.style.backgroundColor = 'red';
    }
    // add li to ul
    ul.appendChild(li);
  });
  // add ul to bookDiv
  bookDiv.appendChild(ul);
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
