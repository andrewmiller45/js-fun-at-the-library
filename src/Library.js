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
    library.shelves.fantasy.push(book)
  }
}

function checkoutBook(library, title, genre){
  if(genre === "fantasy"){
    if(library.shelves.fantasy.includes(title)){
    library.shelves.fantasy.pop(title)
    return `You have now checked out ${title} from the ${library.name}`
  }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}
if(genre === "nonFiction"){
  if(library.shelves.nonFiction.includes(title)){
   library.shelves.nonFiction.pop(title)
    return `You have now checked out ${title} from the ${library.name}`
  }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}
if(genre === "fiction"){
  if(library.shelves.fiction.includes(title)){
    library.shelves.fiction.pop(title)
    return `You have now checked out ${title} from the ${library.name}`
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}
}
//   if(genre === "fiction"){
//     library.shelves.fiction.pop()
//   }
//   if(genre === "nonFiction"){
//     library.shelves.nonFiction.pop()
//   }
//   return `You have now checked out ${title} from the ${library.name}`
// } 


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};