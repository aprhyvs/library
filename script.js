const myLibrary = [];
const bookshelf = document.getElementById("bookshelf");
const openAddBookModal = document.getElementById("open-add-book-modal");
const closeAddBookModal = document.getElementById("close-modal");
const addBookModal = document.getElementById("add-book-modal");
const addBookForm = document.getElementById("add-book-form");

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; 
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function deleteBook(element) {
  // remove the element from the DOM
  element.remove();

  // find the index of the Book to delete
  const bookId = element.dataset.attribute
  const getBookToDelete = myLibrary.findIndex((book) => book.id === bookId);

  // remove the Book from the array
  myLibrary.splice(getBookToDelete, 1)
}

Book.prototype.readBook = function () {
  this.read = !this.read;
  renderBooks()
}

addBookToLibrary("MLBB Guide I", "Roman", 69, true);
addBookToLibrary("MLBB Guide II", "Greek", 420, false);
addBookToLibrary("MLBB Guide III", "Egyptian", 1337, true);
addBookToLibrary("MLBB Guide IV", "Viking", 300, true);
addBookToLibrary("MLBB Guide V", "Turks", 67, true);

//render each book unto page
function renderBooks() {
  bookshelf.innerHTML = "";

  for (const book of myLibrary) {
    bookshelf.insertAdjacentHTML("beforeend", 
      `
      <div class="book" data-attribute="${book.id}">
        <button data-action="delete-book">Delete Book</button>
        <p class="book__title">${book.title}</p>
        <p class="book__author">${book.author}</p>
        <p class="book__pages">${book.pages}</p>
        <p class="book__read">${book.read}</p>
        <button data-action="read-book">Read Book?</button>
      </div>
      `
    );
  }

  const bookEl = document.querySelectorAll(`[data-attribute]`);

  bookEl.forEach(element => {
    const deleteBookBtn = element.querySelector(`[data-action="delete-book"]`);
    const readBookBtn = element.querySelector(`[data-action="read-book"]`);
    const bookId = element.dataset.attribute
    const getBookToRead = myLibrary.find((book) => book.id === bookId);

    deleteBookBtn.addEventListener("click", () => deleteBook(element));
    readBookBtn.addEventListener("click", () => getBookToRead.readBook());
  });
}

renderBooks()

function addBook() {
  addBookModal.showModal();
}

openAddBookModal.addEventListener("click", addBook);

closeAddBookModal.addEventListener("click", () => {
  addBookModal.close();
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector('#book-title').value
  const author = document.querySelector('#book-author').value
  const pages = document.querySelector('#book-pages').value 
  const read = document.querySelector('#book-read').value === "true" ? true : false;

  addBookToLibrary(title, author, pages, read);
  renderBooks()
  addBookModal.close()
});