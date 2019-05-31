import { isLoading } from '../../actions/index'



export const fetchAllBooks = () => {
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`

return async (dispatch) => {
  try {
    dispatch(isLoading(true))
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(response.statusText)
    }
  } catch (error)
}

}