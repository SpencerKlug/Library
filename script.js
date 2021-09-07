//Form selections
const bookForm = document.querySelector('.form')
const formSubmit = document.querySelector('#submit')

//Add book + mark
const addBookForm = document.querySelector('.submit')

//Adding class list that will make the form appear
formSubmit.addEventListener('click',function(){
    bookForm.classList.remove('show')
    bookForm.classList.add('hidden');
})

addBookForm.addEventListener('click',function(){
    console.log('Test');
    bookForm.classList.remove('hidden');
    bookForm.classList.add('show');
})




function book(title,author,pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
    this.info = function() {
        s = `${title} by ${author}, ${pages}, ${read}`;
        return s 
    } 
}

const theHobbit = new book("The Hobbit","J.R.R. Tolkien","295","not read yet")

console.log(theHobbit.info())
