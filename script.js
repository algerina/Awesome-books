saveBtn = document.querySelector('#addBtn')

const bookList = [];

function addBook(){
  book = {
    title: document.querySelector('#inputTitle').value,
    author: document.querySelector('#inputAuthor').value
  }

  bookList.push(book)
  localStorage.setItem('books', JSON.stringify(bookList));
}

addBtn.addEventListener("click", addBook);

function removeBook(index) {
  books.filter(index, 1);
  bookList = bookList.filter(book => book === bookList[index]);
  if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(books));
  } else {
    localStorage.setItem('books', JSON.stringify(books));
  }
}