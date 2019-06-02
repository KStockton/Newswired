// import { isLoading, getAllBooks } from '../actions/index'
import * as action from '../actions/index'
import { cleanBooks } from '../Utility/Cleaners/cleanBooks';



export const fetchAllBooks = (url) => {

  return async (dispatch) => {
  try {
    dispatch(action.isLoading(true))
    const response = await fetch(url)
    if(!response.ok) {
      throw Error(response.statusText)
    }
    const books = await response.json()
   const allBooks = cleanBooks(books)
    dispatch(action.isLoading(false));
    dispatch(action.getAllBooks(allBooks))
  } catch (error) {
    // dispatch(hasError(error.message))
  }
}

}