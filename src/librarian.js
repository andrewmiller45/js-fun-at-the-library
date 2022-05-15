const { searchShelf } = require("./shelf")

class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(name, morning){
    if (morning) {
      return `Good morning, ${name}!`
    }
      return `Hello, ${name}!`
  }
  findBook(book){
    if (this.library.shelves.includes(book)) {
      return `Yes, we have ${book}`
    }
      return `Sorry, we do not have ${book}`
    }     
}




module.exports = Librarian;