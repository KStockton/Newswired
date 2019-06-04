import * as action from '../actions/index'



export const fetchAllBooks = (url) => {
  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))

      const response = await fetch(url)
      console.log('response', response)
      if(!response.ok) {
        throw new Error(response.statusText)
      }
      const books = await response.json()
      console.log(await books)
      dispatch(action.isLoading(false));
      dispatch(action.getAllBooks(books))
    } catch (error) {
      console.log('error', error)
      dispatch(action.hasErrored(error.message))
    }
  }
}