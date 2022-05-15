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
}


module.exports = Librarian;