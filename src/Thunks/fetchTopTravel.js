import * as action from '../actions/index';


export const fetchTopTravel = (url) => {
console.log('url', url)
  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
      throw Error(response.sendText)
    }
      const data = await response.json()
      console.log('data', data)
      dispatch(action.getTopTravel(data))
      dispatch(action.isLoading(false))
    } catch(error) {
      dispatch(action.hasErrored(error.message))
    }
  }
}

