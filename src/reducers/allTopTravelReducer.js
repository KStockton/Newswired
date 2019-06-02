import {cleanTravel} from '../Utility/Cleaners/cleanTravel'

export const allTopTravelReducer = (state = [], action) => {
  switch(action.type) {
    case 'ALL_TRAVEL':
     const allCleanedTravel = cleanTravel(action.travel)  
      return [...state, ...allCleanedTravel]
    default:
      return state
  } 
}