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
    Book.myLibrary.push(this)
  }

  readBook() { 
    this.read = !this.read
  }
}

const newBook = new Book('MLBB', 'joe', 1, true);

console.log(newBook.readBook())
console.log(newBook)