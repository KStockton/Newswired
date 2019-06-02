import * as action from '../actions/index'



export const fetchAllBooks = (url) => {

  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const books = await response.json()
      dispatch(action.isLoading(false));
      dispatch(action.getAllBooks(books))
    } catch (error) {
      dispatch(action.hasErrored(error.message))
    }
  }
}