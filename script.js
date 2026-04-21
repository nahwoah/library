const myLibrary = []
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const newbook = document.getElementById('new-book');
const submit = newbook.querySelector('#submitBtn');
const add_title = newbook.querySelector('#add-title');
const add_author = newbook.querySelector('#add-author');
const add_pages = newbook.querySelector('#add-pages');
const add_read = newbook.querySelector('#add-read');
// const add_read = newbook.querySelector('input[name="add-read"]');


function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addToBookLibrary() {
    const book = new Book(add_title.value, add_author.value, add_pages.value, add_read.checked)
    // const book1 = new Book("Hobbit", "tolkien", 200, false);
    // const book2 = new Book("lotr", "tolkien", 300, false);
    // const book3 = new Book("Silm", "tolkien", 400, false);

    myLibrary.push(book);

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

            if (idx === Book.length) {
                const tdRead = document.createElement('td');
                const readBtn = document.createElement('button');
                if (!item.read === true) {
                    readBtn.textContent = '❌ ' + item[key];
                } else {
                    readBtn.textContent = '✅ ' + item[key];
                }

                readBtn.setAttribute("data-read", item.id);
                tableRow.appendChild(tdRead)
                tdRead.appendChild(readBtn);



                const tdDel = document.createElement('td');
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';


                deleteBtn.onclick = function () {

                    tableRow.remove();
                    myLibrary.splice(myLibrary.findIndex(el => el.id === item.id), 1);
                }

                tableRow.appendChild(tdDel);
                tdDel.appendChild(deleteBtn);
            } else if (idx <= Book.length - 1) {
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
    add_title.value = '';
    add_author.value = '';
    add_pages.value = '';
    add_read.checked = false;
    console.log(myLibrary);
})

const readBtn = document.querySelector('[data-read="this.id"]');
console.log(readBtn)

Book.prototype.changeRead = function () {
    const readBtn = document.querySelector('[data-read="this.id"]');
    console.log(readBtn);
    readBtn.onclick = function () {
        if (read === false) {
            read = true;
            readBtn.textContent = '✅ ' + read;
        } else {
            read = false;
            readBtn.textContent = '❌ ' + read;
        }
    }
}

