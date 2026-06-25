const bookshelf = document.getElementById("bookshelf")

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

  // we could make `getBookIndex` and `getBookToDelete` into one...
  static readBook(element, elementBookIdParam) { 
    const getBookIndex = Book.myLibrary.findIndex((book) => book.id === elementBookIdParam);
    const bookToRead = Book.myLibrary[getBookIndex]

    bookToRead.read = !bookToRead.read
    renderBooks()
  }

  static deleteBook(element, elementBookIdParam) {
    const getBookToDelete = Book.myLibrary.findIndex((book) => book.id === elementBookIdParam);

    element.remove()
    Book.myLibrary.splice(getBookToDelete, 1)
    renderBooks()
  }
}

function addBookToLibrary(title, author, pages, read) {
  Book.myLibrary.push(new Book(title, author, pages, read));
}

function getBook(element, elementBookIdParam) {
  const getBookIndex = Book.myLibrary.findIndex((book) => book.id === elementBookIdParam);

  console.log(Book.myLibrary[getBookIndex])
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
    const deleteBookBtn = element.querySelector(`[data-action="delete-book"]`);
    const readBookBtn = element.querySelector(`[data-action="read-book"]`);

    const elementBookId = element.dataset.id

    deleteBookBtn.addEventListener("click", () => Book.deleteBook(element, elementBookId))
    readBookBtn.addEventListener("click", () => Book.readBook(element, elementBookId))
  })
}

addBookToLibrary("titlehere", "joe", 69, true)
addBookToLibrary("nottitle", "rikishi", 69, true)
addBookToLibrary("thistitle", "jose", 69, true)

renderBooks()
