export const cleanBooks = (uncleanBooks) => {
 const cleanedBooks = uncleanBooks.results.books.map(book => {
    return {
        id: Date.now(),
        rank: book.rank,
        author: book.contributor,
        bookImage: book.book_image,
        description: book.description,
        title: book.title,
        weeksOnList: book.weeks_on_list
      }
  })
  return cleanedBooks
}