const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
  }
}

const book1 = new Book("test", "me", 1, "not read")
console.log(book1.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function addBookToLibrary() {
  //id here
}