import * as action from '../actions/index';
import { cleanNYTBooks } from '../Utility/Cleaners/cleanNYTBooks'

export const fetchAllBooks = (url) => {

  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))
      const response = await fetch(url)
     
      if(!response.ok) {
        throw Error(response.statusText)
    }
      const books = await response.json()
      const cleanBooks = cleanNYTBooks(books)
     
      dispatch(action.getAllBooks(cleanBooks))
      dispatch(action.isLoading(false));
    } catch(error) {
      dispatch(action.hasErrored(error.message, 'books'))
    }
  }
}