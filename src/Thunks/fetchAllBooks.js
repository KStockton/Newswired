import { isLoading, getAllBooks } from '../actions/index'
import { cleanBooks } from '../Utility/cleanBooks';



export const fetchAllBooks = (url) => {

  return async (dispatch) => {
  try {
    dispatch(isLoading(true))
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(response.statusText)
    }
    const books = await response.json()
   const allBooks = cleanBooks(books)
   console.log(books)
    dispatch(isLoading(false));
    dispatch(getAllBooks(allBooks))
  } catch (error) {
    // dispatch(hasError(error.message))
  }
}

}