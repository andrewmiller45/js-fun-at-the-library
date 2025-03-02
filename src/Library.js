function createLibrary(libraryName){
  var newLibrary = {
  name: libraryName,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: []
    }
  }
  return newLibrary
} 

function addBook(library, book){
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book)
  }
  if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book)  
  } 
  if (book.genre === 'fiction') {
    library.shelves.fiction.push(book)
  }
}

function checkoutBook(library, title, genre){
  for (let i = 0; i< library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice(i,1)
      return `You have now checked out ${title} from the ${library.name}`
    }
  }
      return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};