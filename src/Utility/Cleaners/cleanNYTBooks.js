export const cleanNYTBooks = (uncleanBooks) => {
  const cleanedBooks = uncleanBooks.results.books.map(book => {
     return {
         id: book.primary_isbn10,
         rank: book.rank,
         author: book.contributor,
         bookImage: book.book_image,
         description: book.description,
         title: book.title,
         weeksOnList: book.weeks_on_list,
         isFavorited: false
       }
   })
   return cleanedBooks
 }