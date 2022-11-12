let library = [];

let book1 = new Book('a','b',5,true);
let book2 = new Book('c','d',3,true);
let book3 = new Book('g','e',42,false);
let book4 = new Book('n','w',7,false);

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

function addBookToLibrary(book) {
  library.push(book);
  displayLibrary();
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

function resetLibrary() {
  let table = document.querySelector('table');
  table.innerHTML = '';
  table.innerHTML = '<tr><th>Title</th><th>Author</th><th># of Pages</th><th>Read?</th></tr>';
}

resetLibrary();