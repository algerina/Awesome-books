/* eslint-disable no-use-before-define */
const saveBtn = document.querySelector('#addBtn');// eslint-disable-line no-unused-vars
const bookListDiv = document.querySelector('#bookList');
dataStorage(JSON.parse(localStorage.getItem('books'))); // eslint-disable-line no-undef
function addBook() {
  const bookList = JSON.parse(localStorage.getItem('books')) === null ? [] : JSON.parse(localStorage.getItem('books'));
  const book = {
    title: document.querySelector('#inputTitle').value,
    author: document.querySelector('#inputAuthor').value,
  };

  bookList.push(book);
  localStorage.setItem('books', JSON.stringify(bookList));
  dataStorage(bookList); // eslint-disable-line no-undef
}

addBtn.addEventListener('click', addBook); // eslint-disable-line no-undef

function removeBook(index) {
  const bookList = JSON.parse(localStorage.getItem('books')) === null ? [] : JSON.parse(localStorage.getItem('books'));
  bookList.splice(index, 1);

  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(bookList));
  } else {
    localStorage.setItem('books', JSON.stringify(bookList));
  }

  dataStorage(bookList); // eslint-disable-line no-undef
}

function dataStorage(listOfBooks) {
  bookListDiv.innerHTML = '';

  const wrapper = document.createElement('div');

  for (let i = 0; i < listOfBooks.length; i += 1) {
    const titleHeader = document.createElement('h2');
    const authorHeader = document.createElement('h2');
    const removebtn = document.createElement('button');

    titleHeader.innerText = listOfBooks[i].title;
    authorHeader.innerText = listOfBooks[i].author;

    removebtn.textContent = 'Remove';
    removebtn.classList.add('remove');
    removebtn.addEventListener('click', (e) => { // eslint-disable-line no-unused-vars
      removeBook(i);
    });

    wrapper.append(titleHeader, authorHeader, removebtn);
  }

  bookListDiv.appendChild(wrapper);
}