const bookshelf = document.getElementById("bookshelf");
const openAddBookModal = document.getElementById('open-add-book-modal');
const closeAddBookModal = document.getElementById('close-modal');
const addBookModal = document.getElementById('add-book-modal');
const addBookForm = document.getElementById("add-book-form");

class Book {
  // REFERENCE:
  // Source - https://stackoverflow.com/a/73055512
  // Posted by Lord-JulianXLII
  // Retrieved 2026-06-15, License - CC BY-SA 4.0
  static myLibrary = []

  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  static readBook(element, bookIndexParam) { 
    const bookToRead = Book.myLibrary[bookIndexParam]
    bookToRead.read = !bookToRead.read

    renderBooks()
  }

  static deleteBook(element, bookIndexParam) {
    element.remove()
    Book.myLibrary.splice(bookIndexParam, 1)

    renderBooks()
  }

  static addBookToLibrary(title, author, pages, read) {
    Book.myLibrary.push(new Book(title, author, pages, read));
  }
}

function renderBooks() {
  bookshelf.innerHTML = ""

  for (const book of Book.myLibrary) {
    bookshelf.insertAdjacentHTML("beforeend",
    ` 
    <div class="book" data-id="${book.id}">
      <button data-action="delete-book">Delete Book</button>
      <p class="book__title">${book.title}</p>
      <p class="book__author">${book.author}</p>
      <p class="book__pages">${book.pages}</p>
      <p class="book__read">${book.read}</p>
      <button data-action="read-book">Read Book</button>
    </div>
    `
    );
  }

  const bookEl = document.querySelectorAll(`[data-id]`);

  bookEl.forEach(element => {
    const readBookBtn = element.querySelector(`[data-action="read-book"]`);
    const deleteBookBtn = element.querySelector(`[data-action="delete-book"]`);

    const elementBookId = element.dataset.id
    const getBookIndex = Book.myLibrary.findIndex((book) => book.id === elementBookId);

    readBookBtn.addEventListener("click", () => Book.readBook(element, getBookIndex))
    deleteBookBtn.addEventListener("click", () => Book.deleteBook(element, getBookIndex))
  })
}

Book.addBookToLibrary("titlehere", "joe", 69, true)
Book.addBookToLibrary("nottitle", "rikishi", 69, true)
Book.addBookToLibrary("thistitle", "jose", 69, true)

renderBooks()

openAddBookModal.addEventListener("click", () => {
  addBookModal.showModal()
});

closeAddBookModal.addEventListener("click", () => {
  addBookModal.close();
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector('#book-title').value
  const author = document.querySelector('#book-author').value
  const pages = document.querySelector('#book-pages').value 
  const read = document.querySelector('#book-read').value === "true" ? true : false;

  Book.addBookToLibrary(title, author, pages, read);
  renderBooks()
  addBookModal.close()
});