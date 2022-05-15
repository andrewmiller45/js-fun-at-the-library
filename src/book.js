function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns){
  return {name: name, age: age, pronouns: pronouns}
}

function saveReview(body, reviews){ 
  if (reviews.includes(body)) {
    return reviews
} else
    return reviews.push(body)
}

function calculatePageCount(title){
  return title.length * 20
}

function writeBook(bookTitle, bookCharacter, bookGenre){
  var newBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
  return newBook
}

function editBook(book){
  var newLength = ((book.pageCount) * .75)
  book.pageCount = newLength
  return newLength
}
  
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}