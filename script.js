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