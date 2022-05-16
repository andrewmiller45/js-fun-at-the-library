function shelfBook(book, array){
  if(array.length <= 2) {
    array.unshift(book)
    return array
  } else
    return array
}

function unshelfBook(book, array){
    for (var i = 0; i < array.length; i++) {
      if(book === array[i].title){
        array.splice(i,1)
    }
  }
}

function listTitles(array){
  var titles = ""
  for (var i = 0; i < array.length; i++) {
    if(i + 1 === array.length) {
      titles += `${array[i].title}`
  } else
      titles += `${array[i].title}, `
  } 
  return titles
} 

function searchShelf(shelf, book){
  var hasBook = false
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      hasBook = true
    } else 
      hasBook = false
  }
    return hasBook
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};





