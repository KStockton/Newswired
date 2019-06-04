import {cleanResponse} from '../Utility/Cleaners/cleanResponse'

export const allSportNewsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ALL_SPORTS':
      console.log(action.sports)
     const allCleanedSports = cleanResponse(action.sports)  
      return [...state, ...allCleanedSports]
    default:
      return state
  } 
}
