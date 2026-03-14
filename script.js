const myLibrary = [];
const bookshelf = document.getElementById("bookshelf");
const addBookBtn = document.getElementById("add-book");
const addBookForm = document.getElementById("add-book-form");
const closeBookFormBtn = document.getElementById("close-modal");

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
  addBookForm.showModal();
}

addBookBtn.addEventListener("click", addBook);

closeBookFormBtn.addEventListener("click", () => {
  addBookForm.close();
});

