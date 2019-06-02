export const allTopTravelReducer = (state = [], action) => {
  switch(action.type) {
    case 'ALL_TRAVEL':
      return [...state, action.travel]
    default:
      return state
  } 
}