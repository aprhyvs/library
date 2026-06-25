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

  readBook() { 
    this.read = !this.read
  }
}

function addBookToLibrary(title, author, pages, read) {
  Book.myLibrary.push(new Book(title, author, pages, read));
}

function deleteBook() {
  const getBookToDelete = Book.myLibrary.findIndex((book) => book.id === this.book)

  Book.myLibrary.splice(getBookToDelete, 1)
}

function getBook(element) {
  console.log(element)
  console.log(element.dataset.id)
}

addBookToLibrary("titlehere", "joe", 69, true)
addBookToLibrary("titlehere", "joe", 69, true)
addBookToLibrary("titlehere", "joe", 69, true)

function renderBooks() {
  bookshelf.innerHTML = ""

  for (const book of Book.myLibrary) {
    bookshelf.insertAdjacentHTML("beforeend",
    ` 
    <div class="book" data-id="${book.id}">
      <button data-action="get-book">Get Book</button>
      <p class="book__title">${book.title}</p>
      <p class="book__author">${book.author}</p>
      <p class="book__pages">${book.pages}</p>
      <p class="book__read">${book.read}</p>
    </div>
    `
    );
  }

  const bookEl = document.querySelectorAll(`[data-id]`);

  bookEl.forEach(element => {
    const getBookBtn = element.querySelector(`[data-action="get-book"]`);

    getBookBtn.addEventListener("click", () => getBook(element))
  })
}

renderBooks()