class Library {
    constructor(){
      this.books = [];
    }
    
    addBook(book){
        console.log('Added book :', book)
        this.books.push(book)
    }

    getBooks(){
        return this.books;
    }
  }