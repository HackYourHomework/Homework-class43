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
  const bookList = document.querySelector('#bookList');
  const ulElement = document.createElement('ul');
  books.forEach((element) => {
    const liElement = document.createElement('li');
    const pElement = document.createElement('p');
    pElement.textContent = `${element.title} by ${element.author} `;

    if (element.alreadyRead) {
      liElement.style.backgroundColor = 'green';
    } else {
      liElement.style.backgroundColor = 'red';
    }

    const imgElement = document.createElement('img');
    imgElement.src = element.cover;

    bookList.appendChild(ulElement);
    ulElement.appendChild(liElement);
    liElement.appendChild(pElement);
    liElement.appendChild(imgElement);
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
      cover:
        'https://th.bing.com/th/id/R.0fd76ffdb40c5fae40df5b46800c17c9?rik=VS04xaipCGECUQ&riu=http%3a%2f%2fs.s-bol.com%2fimgbase0%2fimagebase3%2flarge%2fFC%2f4%2f8%2f4%2f2%2f9200000010922484.jpg&ehk=myq7hGlJBn4ciAOEdsCdNLc6%2bcBCa9KvBZyL2eSERYU%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      cover:
        'https://th.bing.com/th/id/R.07075fc2af36e4f96b867ea21c01f582?rik=W4nahOQgxUlkLw&riu=http%3a%2f%2fwww.kurzweilai.net%2fimages%2fThe-Most-Human-Human-Paperback-Front-Cover.jpg&ehk=92fs5ROJmm%2fXQW3ge9IJD9mcHMZctLXaGpPh34TpbSg%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      cover:
        'https://shanetully.com/assets/images/books/pragmatic_programmer_cover.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
