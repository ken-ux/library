const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let book_read = "not read yet";
    if (this.read) {
      book_read = "already read";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${book_read}`;
  };
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

function addBookToLibrary(book) {
    myLibrary.push(book);
}
