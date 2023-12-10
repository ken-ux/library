const myLibrary = [];
const table = document.querySelector("table");
const newBookButton = document.querySelector(".new-book");
const form = document.querySelector("form");

newBookButton.addEventListener("click", () => {
  let dialog = document.querySelector("dialog");
  dialog.setAttribute("open", "");
});

form.addEventListener("submit", () => {
  const formData = new FormData(form);
  let title = formData.get("title");
  let author = formData.get("author");
  let pages = formData.get("pages");
  let read = formData.get("read");
  // Form sends value as string, not boolean, so have to convert
  if (read === "true") {
    read = true;
  } else {
    read = false;
  }
  let book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  displayBooksToTable();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.data_attribute = myLibrary.length;
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

function clearTable() {
  let table_header = document.querySelector("tr");
  table.replaceChildren(table_header);
}

function displayBooksToTable() {
  clearTable();
  myLibrary.forEach((book) => {
    let table_row = document.createElement("tr");
    let table_functions = ["remove", "changeReadStatus"];
    for (let i = 0; i < table_functions.length; i++) {
      let table_data = document.createElement("td");
      let button = document.createElement("button");
      button.addEventListener("click", book[table_functions[i]].bind(book));
      button.textContent = "Click Me";
      table_data.appendChild(button);
      table_row.appendChild(table_data);
    }
    let table_properties = ["title", "author", "pages", "read"];
    for (let i = 0; i < table_properties.length; i++) {
      let table_data = document.createElement("td");
      let table_content = book[table_properties[i]];
      table_data.textContent = table_content;
      table_row.appendChild(table_data);
    }
    table.appendChild(table_row);
  });
}

Book.prototype.remove = function () {
  console.log(this.data_attribute);
  myLibrary.splice(this.data_attribute, 1);
  displayBooksToTable();
};

Book.prototype.changeReadStatus = function () {
  this.read = !this.read;
  displayBooksToTable();
};

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

addBookToLibrary(theHobbit);
displayBooksToTable();
