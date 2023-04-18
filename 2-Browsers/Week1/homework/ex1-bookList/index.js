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
  const bookList = document.createElement('ul');

  books.forEach((book) => {
    const bookItem = document.createElement('li');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = `${book.title} by ${book.author}`;

    const bookCover = document.createElement('img');
    bookCover.src = book.coverUrl;

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookCover);

    if (book.alreadyRead === true) {
      bookItem.style.backgroundColor = 'green';
    } else {
      bookItem.style.backgroundColor = 'red';
    }

    bookList.appendChild(bookItem);
  });

  return bookList;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      coverUrl:
        'https://th.bing.com/th/id/OIP.pauG0yCaSklG_zzR0x_3FQAAAA?pid=ImgDet&rs=1',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      coverUrl:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2419/9780241956052.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      coverUrl:
        'https://th.bing.com/th/id/OIP.QhVZjOlKb2qjZpIVlP8RSgAAAA?pid=ImgDet&rs=1',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
