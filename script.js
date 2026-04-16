const myLibrary = []
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const newbook = document.getElementById('new-book');
const submit = newbook.querySelector('#submitBtn');
const add_title = newbook.querySelector('#add-title');
const add_author = newbook.querySelector('#add-author');
const add_pages = newbook.querySelector('#add-pages');
const add_read = newbook.querySelector('#add-read');


function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.delete = function deleteRow() {
        // const deleteBtn = document.createElement('button');
        // deleteBtn.textContent = 'Delete';
        // tableRow.appendChild(deleteBtn);
        // let i = this.parentNode.parentNode.rowIndex;
        document.querySelector()
        deleteBtn.onclick = 
        document.querySelector("tbody").deleteRow(this);
    }
}

function addToBookLibrary() {
    const book = new Book(add_title.value, add_author.value, add_pages.value, add_read.value)
    // const book1 = new Book("Hobbit", "tolkien", 200, false);
    // const book2 = new Book("lotr", "tolkien", 300, false);
    // const book3 = new Book("Silm", "tolkien", 400, false);

    myLibrary.push(book);
    console.log(myLibrary);
}

function clearTable() {
    while (tbody.rows.length > 0) {
        tbody.deleteRow(0);
    }
}

function addToTable() {
    clearTable();
    myLibrary.forEach(item => {
        const tableRow = document.createElement('tr');

        Object.keys(item).forEach((key, idx) => {
            if (idx === Book.length +1) {
                console.log(Book.length, idx);
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                tableRow.appendChild(deleteBtn);
            }else{
                const tbData = document.createElement('td');
                tbData.textContent = item[key];
                tableRow.appendChild(tbData);
            }

            // const tbData = document.createElement('td');
            // tbData.textContent = item[key];
            // tableRow.appendChild(tbData);
        })
        tbody.appendChild(tableRow);
    })
}

submit.addEventListener("click", function (e) {

    e.preventDefault()

    addToBookLibrary();
    addToTable();

    newbook.close();
    add_title.value = ''
    add_author.value = ''
    add_pages.value = ''
    newbook.querySelector('#add-read').value = '';

})

// function deleteRow(r) {
//     let i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }