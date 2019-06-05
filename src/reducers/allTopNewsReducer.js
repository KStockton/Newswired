import {cleanResponse} from '../Utility/Cleaners/cleanResponse'

export const allTopNewsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ALL_TOP_NEWS':
     const allCleanedTopNews = cleanResponse(action.news)  
      return [...state, ...allCleanedTopNews]
    default:
      return state
  } 
}
