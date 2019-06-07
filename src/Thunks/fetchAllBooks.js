import * as action from '../actions/index';
import { cleanNYTBooks } from '../Utility/Cleaners/cleanNYTBooks'




export const fetchAllBooks = (url) => {
  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))

      const response = await fetch(url)

      if(!response.ok) {
        throw new Error(response.statusText)
      }
      const books = await response.json()
      const cleanBooks = cleanNYTBooks(books)
      dispatch(action.isLoading(false));
      dispatch(action.getAllBooks(cleanBooks))
    } catch (error) {
      dispatch(action.hasErrored(error.message, 'books'))
    }
  }
}