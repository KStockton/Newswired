export const cleanResponse = (uncleanResponse) => {
 const cleanedBooks = uncleanResponse.articles.map(book => {
    return {
        id: book.source.id,
        source: book.source.name,
        author: book.author,
        bookImage: book.urlToImage,
        description: book.description,
        title: book.title,
        content: book.content
      }
  })
  return cleanedBooks
}