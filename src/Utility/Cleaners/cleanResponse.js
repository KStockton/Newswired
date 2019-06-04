const shortid = require('shortid');


export const cleanResponse = (uncleanResponse) => {
 const cleanedBooks = uncleanResponse.articles.map(book => {
    return {
        id: shortid.generate(),
        source: book.source.name,
        author: book.author,
        bookImage: book.urlToImage,
        description: book.description,
        title: book.title,
        content: book.content,
        isfavorited: false
      }
  })
  return cleanedBooks
}