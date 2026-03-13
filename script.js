const library = document.getElementById("library")
const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
}

addBookToLibrary("MLBB Guide", "Roman", 69, true)
addBookToLibrary("MLBB Guide II", "Greek", 420, false)
addBookToLibrary("MLBB Guide III", "Egyptian", 1337, true)

//render each book unto page
function renderBooks() {
  for (const book of myLibrary) {
    library.insertAdjacentHTML("beforeend", 
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

// console.log(myLibrary)