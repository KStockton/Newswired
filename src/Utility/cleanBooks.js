export const cleanBooks = (uncleanBooks) => {
 const cleanedBooks = uncleanBooks.results.books.map(book => {
    return {
        rank: book.rank,
        author: book.author,
        bookImage: book.book_image,
        description: book.description,
        title: book.title
      }
  })
  return cleanedBooks
}