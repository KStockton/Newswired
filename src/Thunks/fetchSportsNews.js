import * as action from '../actions/index';
import { cleanResponse } from './../Utility/Cleaners/cleanResponse'


export const fetchSportsNews = (url) => {

  return async (dispatch) => {
    try {
      dispatch(action.isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
      throw Error(response.sendText)
    }
      const data = await response.json()
      const cleanData = cleanResponse(data)
      dispatch(action.getSportsNews(cleanData))
      dispatch(action.isLoading(false))
    } catch(error) {
      dispatch(action.hasErrored(error.message, 'sportsNews'))
    }
  }
}