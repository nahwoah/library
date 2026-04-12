const myLibrary = []

function Book ( title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToBookLibrary (){
    const book = new Book("Hobbit", "tolkien", 200, false);
    myLibrary.push(book);
    
}

addToBookLibrary();
console.log(myLibrary);