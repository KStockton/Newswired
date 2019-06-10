import * as action from '../actions/index';
import { cleanResponse } from '../Utility/Cleaners/cleanResponse';


export const fetchTopTravel = (url) => {

  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))
      const response = await fetch(url)
     
      if(!response.ok) {
      throw Error(response.statusText)
    }
      const data = await response.json()
      const cleanData = cleanResponse(data)
      
      dispatch(action.isLoading(false))
      dispatch(action.getTopTravel(cleanData))

    } catch (error) {
      dispatch(action.hasErrored(error.message, 'travel'))
    }
  }
}

