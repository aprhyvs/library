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
  this.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("MLBB Guide", "Roman", 69, true);
addBookToLibrary("MLBB Guide II", "Greek", 420, false);
addBookToLibrary("MLBB Guide III", "Egyptian", 1337, true);
addBookToLibrary("MLBB Guide IV", "Viking", 300, true);
addBookToLibrary("MLBB Guide V", "Turks", 67, true);

//render each book unto page
function renderBooks() {
  for (const book of myLibrary) {
    bookshelf.insertAdjacentHTML("beforeend", 
      `
      <div class="book">
        <p class="book__title">${book.title}</p>
        <p class="book__author">${book.author}</p>
        <p class="book__pages">${book.pages}</p>
        <p class="book__read">${book.read}</p>
      </div>
      `
    );
  }
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
  const formData = new FormData(addBookForm);
});
