const myLibrary = []
const exarray = ['1', '2']
const table = document.querySelector("table");
const newbook = document.getElementById('new-book');
const submit = newbook.querySelector('#submitBtn');
const title = newbook.querySelector('#add-title');
const author = newbook.querySelector('#add-author');
const pages = newbook.querySelector('#add-pages');
const read = newbook.querySelector('#add-read');


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


function addToTable () {myLibrary.forEach(item => {
    const tableRow = document.createElement('tr');

    Object.keys(item).forEach(key => {
        const tbData = document.createElement('td');
        tbData.textContent = item[key];
        tableRow.appendChild(tbData);
    })
    table.appendChild(tableRow);
})
}

submit.addEventListener("click", function (e){
    addToTable();
    console.log('1');
    e.preventDefault()

    const tableRow = document.createElement('tr');
    // for (i = 0; i < 4; i++){

    // }

    const tdId = document.createElement('td');
    tdId.textContent = crypto.randomUUID();
    tableRow.appendChild(tdId);
    const tdTitle = document.createElement('td');
    tdTitle.textContent = title.value;
    tableRow.appendChild(tdTitle);
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = author.value;
    tableRow.appendChild(tdAuthor);
    const tdPages = document.createElement('td');
    tdPages.textContent = pages.value;
    tableRow.appendChild(tdPages);
    const tdRead = document.createElement('td');
    tdRead.textContent = read.value;
    tableRow.appendChild(tdRead);
    
    table.appendChild(tableRow);
    newbook.close();
})