import * as action from '../actions/index';


export const fetchTopTravel = (url) => {

  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
      throw Error(response.sendText)
    }
      const data = await response.json()
    
      dispatch(action.getTopTravel(data))
      dispatch(action.isLoading(false))
    } catch(error) {
      dispatch(action.hasErrored(error.message, 'travel'))
    }
  }
}

