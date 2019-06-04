import {cleanResponse} from '../Utility/Cleaners/cleanResponse'

export const allTopTravelReducer = (state = [], action) => {
  switch(action.type) {
    case 'ALL_TRAVEL':
     const allCleanedTravel = cleanResponse(action.travel)  
      return [...state, ...allCleanedTravel]
    default:
      return state
  } 
}
