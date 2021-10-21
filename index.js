/* eslint-disable no-use-before-define */
const title = document.querySelector('#inputTitle');
const author = document.querySelector('#inputAuthor');
const bookList = document.querySelector('#bookList'); // eslint-disable-line no-unused-vars
const addBtn = document.querySelector('#addBtn');
const books = JSON.parse(localStorage.getItem('books')) || [];

class Book {
  constructor(title, author) {
    this.title = title.value;
    this.author = author.value;
  }
}

const addBook = () => {
  const book = new Book(title, author);
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  return book;
};

const removeBook = (index) => {
  books.splice(index, 1);
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(books));
  } else {
    localStorage.setItem('books', JSON.stringify(books));
  }
  if (index.classList.contains('remove')) {
    const removeItem = index.parentElement;
    removeItem.remove();
  }
};
const datastorage = ({ title, author }) => {
  const Wrapper = document.createElement('ul');
  const titleHeader = document.createElement('h2');
  const authorHeader = document.createElement('h2');
  const removebtn = document.createElement('button');
  titleHeader.innerText = title;
  authorHeader.innerText = author;
  removebtn.textContent = 'Remove';
  removebtn.classList.add('remove');
  Wrapper.classList.add('wrapper');

  Wrapper.append(titleHeader, authorHeader, removebtn);
  bookList.appendChild(Wrapper);
  removebtn.addEventListener('click', (e) => {
    const removeItem = e.target;
    removeBook(removeItem);
  });
};

books.forEach(datastorage);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (title.validity.valueMissing && author.validity.valueMissing) {
    title.setCustomValidity('Please enter book title');
    author.setCustomValidity('Please enter book Author');
  } else {
    const newBook = addBook(title.value, author.value);

    datastorage(newBook);
    title.value = '';
    author.value = '';
    title.focus();
  }
});

const bookSection = document.querySelector('.books');
const formSection = document.querySelector('.BookForm');
const contactSection = document.querySelector('.contact');
const menuSection = Array.from(document.querySelector('.navList').children);
// let DateTime = luxon.DateTime.now();
// const now = DateTime.now();

function trakList(e) {
    const targetOn = e.target;
    const targetText = targetOn.textContent; 
    if (targetText === 'List') {
        bookSection.style.display = 'block';
        formSection.style.display = 'none';
        contactSection.style.display = 'none';
    } else if (targetText === 'Add New') {
            bookSection.style.display = 'none';
            formSection.style.display = 'block';
            contactSection.style.display = 'none';

    } else if (targetText === 'Contact') {
        bookSection.style.display = 'none';
        formSection.style.display = 'none';
        contactSection.style.display = 'block';

}
}
menuSection.forEach((element) => {
    element.addEventListener('click', trakList, false);

}); 


