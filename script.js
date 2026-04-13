const myLibrary = []
const exarray = ['1', '2']
const table = document.querySelector("table")

function Book ( title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToBookLibrary (){
    const book1 = new Book("Hobbit", "tolkien", 200, false);

    const book2 = new Book("lotr", "tolkien", 300, false);
    
    const book3 = new Book("Silm", "tolkien", 400, false);
    myLibrary.push(book1, book2, book3);
}

addToBookLibrary();
console.log(myLibrary);

// const tableRows = document.createElement('tr');
// const tableData = document.createElement('td');

// tableRows.textContent = myLibrary;

myLibrary.forEach(item => {
    const tableRow = document.createElement('tr');

    Object.keys(item).forEach(key => {
        const tbData = document.createElement('td');
        tbData.textContent = item[key];
        tableRow.appendChild(tbData);
    })
    table.appendChild(tableRow);
})