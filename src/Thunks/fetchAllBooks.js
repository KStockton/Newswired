import { isLoading, getAllBooks } from '../actions/index'
import { cleanBooks } from '../Utility/cleanBooks';
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`


export const fetchAllBooks = () => {
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`

return async (dispatch) => {
  try {
    dispatch(isLoading(true))
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(response.statusText)
    }
    const books = await response.json()
   const allBooks = cleanBooks(books)
   console.log(allBooks)
    dispatch(isLoading(false));
    dispatch(getAllBooks(allBooks))
  } catch (error) {
    // dispatch(hasError(error.message))
  }
}

}