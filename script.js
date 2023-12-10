const myLibrary = [];
const table = document.querySelector("table");
const newBookButton = document.querySelector(".new-book");

newBookButton.addEventListener("click", () => {
    let dialog = document.querySelector("dialog");
    dialog.setAttribute("open", "");
})

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooksToTable() {
  myLibrary.forEach((book) => {
    let table_row = document.createElement("tr");
    for (const property in book) {
      if (property !== "info") {
        let table_data = document.createElement("td");
        table_data.textContent = book[property];
        table_row.appendChild(table_data);
      }
    }
    table.appendChild(table_row);
  });
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

addBookToLibrary(theHobbit);
displayBooksToTable();