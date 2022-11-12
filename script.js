let library = [];

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
}

function displayLibrary() {
  
}