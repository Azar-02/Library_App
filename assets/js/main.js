const formEl = document.querySelector('form')

const lib = new Library()

formEl.addEventListener('submit',(e)=>{
    e.preventDefault()

    const bookTitle = document.getElementById('bookTitle').value.trim()
    const bookAuthor = document.getElementById('bookAuthor').value.trim()

    if(bookTitle && bookAuthor){
        const addedBook = new Book(bookTitle, bookAuthor)

        lib.addBook(addedBook)
    }

})