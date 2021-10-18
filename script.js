const saveBtn = document.querySelector('#addBtn');
const bookListDiv = document.querySelector('#bookList');
dataStorage(JSON.parse(localStorage.getItem('books')));  
function addBook(){
  const bookList = JSON.parse(localStorage.getItem('books')) === null ? [] : JSON.parse(localStorage.getItem('books'));
  const book = {
    title: document.querySelector('#inputTitle').value,
    author: document.querySelector('#inputAuthor').value
  }

  bookList.push(book)
  localStorage.setItem('books', JSON.stringify(bookList));
  dataStorage(bookList)
}

addBtn.addEventListener("click", addBook);

function removeBook(index) {
  const bookList = JSON.parse(localStorage.getItem('books')) === null ? [] : JSON.parse(localStorage.getItem('books'));
  bookList.splice(index, 1);

  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(bookList));
  } else {
    localStorage.setItem('books', JSON.stringify(bookList));
  }

  dataStorage(bookList);
}

function dataStorage(listOfBooks) {

  bookListDiv.innerHTML = '';

  const wrapper = document.createElement('div');

  for (let i = 0; i < listOfBooks.length; i++) {

    const titleHeader = document.createElement('h2');
    const authorHeader = document.createElement('h2');
    const removebtn = document.createElement('button');

    titleHeader.innerText = listOfBooks[i].title;
    authorHeader.innerText = listOfBooks[i].author;

    removebtn.textContent = 'Remove';
    removebtn.classList.add('remove');

    removebtn.addEventListener('click', (e) => {
      removeBook(i);
    });

    wrapper.append(titleHeader, authorHeader, removebtn);

  }

  bookListDiv.appendChild(wrapper);
}