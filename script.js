let library = [];

let body = document.querySelector('body');

let book1 = new Book('a','b',5,true);
let book2 = new Book('c','d',3,true);
let book3 = new Book('g','e',42,false);
let book4 = new Book('n','w',7,false);

resetLibrary();
addNewBookButton();
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  return this;
}

Book.prototype.info = function() {
  return this.title + ', ' + this.author + ', ' + this.pages + ', ' + this.read;
}

function bookToTableEntry(book) {
  let { title, author, pages, read } = book;
  return `<td>${title}</td><td>${author}</td><td>${pages}</td><td>${read}</td>`
}

function appendNewRow(book) {
  let table = document.querySelector('table');
  let newRow = document.createElement('tr');
  newRow.innerHTML = bookToTableEntry(book);
  table.appendChild(newRow);
}

function displayLibrary() {
  resetLibrary();
  library.map(appendNewRow);
}

function addBookToLibrary(book) {
  library.push(book);
  displayLibrary();
}

function addNewBookButton() {
  let newBook = document.createElement('button');
  newBook.textContent = 'NEW BOOK';
  newBook.id = 'newBook';
  body.appendChild(newBook);
  newBook.addEventListener('click', createForm);
}

function resetLibrary() {
  let table = document.querySelector('table');
  table.innerHTML = '<tr><th>Title</th><th>Author</th><th># of Pages</th><th>Read?</th></tr>';
}

function submitForm(e) {
  e.preventDefault();
  let inputs = [];
  e.target.querySelectorAll('input').forEach((input) => inputs.push(input.value));
  addBookToLibrary(new Book(...inputs));
  let form = document.querySelector('form');
  body.removeChild(form);
  addNewBookButton();
}

function createForm() {
  let body = document.querySelector('body');
  body.removeChild(newBook);
  let form = document.createElement('form');
  let formHTML = '<label name="title">Title <input type="text"/></label><label name="author">Author <input type="text"/></label>'
      + '<label name="pages"># of Pages <input type="text"/></label><label name="read">Read? <input type="text"/></label>'
      + '<button id="submit">Submit</button>';
  form.innerHTML = formHTML;
  body.appendChild(form);
  form.addEventListener('submit', submitForm);
}