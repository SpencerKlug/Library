//Form selections
const bookForm = document.querySelector('.form')
const formSubmit = document.querySelector('#submit')
const lb = document.querySelector('.librairyBooks')

//my Library Array
let myLibrary = [];

//Add book + mark
const addBookForm = document.querySelector('.submit')

//Documenting the book added
function book(title,author,pages,read,id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.id = id
    this.info = function() {
        s = `${title} by ${author}, ${pages}, ${read}`;
        return s 
    } 
}

//Adding class list that will make the form appear
formSubmit.addEventListener('click',function(){
    bookForm.classList.remove('show')
    bookForm.classList.add('hidden');
    lb.classList.remove('op');
})

addBookForm.addEventListener('click',function(){
    console.log('Test');
    clear();
    bookForm.classList.remove('hidden');
    lb.classList.add('op');
    bookForm.classList.add('show');
})

formSubmit.addEventListener('click',function(){
    const bookPages = document.querySelector('#pagecount').value;
    const bookAuthor = document.querySelector('#author').value;
    const bookTitle = document.querySelector('#title').value;
    const bookStatus = document.querySelector('input[name="selection"]:checked').value;
    const bookId = Date.now();

    const myBook = new book(bookTitle,bookAuthor,bookPages,bookStatus,bookId);
    console.log(bookId);
    console.log(myBook.info());
    myLibrary.push(myBook);
    bookAddition(myBook.title,myBook.author,myBook.pages,myBook.read,myBook.id);
})

//adding html logic
function bookAddition(bookTitle,bookAuthor,bookPages,bookStatus,bookId) {
    //creating base div
    const cardBase = document.createElement('div');
    cardBase.classList.add('bookTitle');
    lb.appendChild(cardBase);
    //title span
    const cardTitle = document.createElement('span');
    cardTitle.classList.add('title'); 
    cardBase.appendChild(cardTitle);
    
    const titleP = document.createElement('p')
    titleP.textContent = 'Title: '+bookTitle
    cardTitle.appendChild(titleP);

    //author span
    const cardAuthor = document.createElement('span')
    cardAuthor.classList.add('author')
    cardBase.appendChild(cardAuthor);

    const authorP = document.createElement('p');
    authorP.textContent = 'Author: '+bookAuthor;
    cardAuthor.appendChild(authorP);

    //pages span
    const cardPages = document.createElement('span');
    cardPages.classList.add('pages');
    cardBase.appendChild(cardPages);

    const pagesP = document.createElement('p');
    pagesP.textContent = 'Pages: '+bookPages; 
    cardPages.appendChild(pagesP);
    //status span
    const cardStatus = document.createElement('span');
    cardStatus.classList.add('status');
    cardBase.appendChild(cardStatus);

    const statusP = document.createElement('p');
    statusP.textContent = 'Status: '+bookStatus;
    cardStatus.appendChild(statusP);

    //delete span
    const cardDelete = document.createElement('span');
    cardDelete.classList.add('delete');
    cardBase.appendChild(cardDelete);

    const deteleI = document.createElement('input');
    deteleI.classList.add('deleteButton');
    deteleI.type = 'submit';
    deteleI.value = 'Remove Book';
    cardDelete.appendChild(deteleI);
}

//clearing form 
function clear(){
    const formTitle = document.querySelector('#title');
    const formAuthor = document.querySelector('#author');
    const formPage = document.querySelector('#pagecount')
    formTitle.value = '';
    formAuthor.value = '';
    formPage.value = '';
}

lb.addEventListener('click',function(e){
    if(e.target.classList == 'deleteButton'){
        const bt = e.target.parentElement.parentElement;
        lb.removeChild(bt);
    }
})

const theHobbit = new book("The Hobbit","J.R.R. Tolkien","295","not read yet")


