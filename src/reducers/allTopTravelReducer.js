export const allTopTravelReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_TRAVEL':
      return action.travel;
    default:
      return state;
  } 
};
