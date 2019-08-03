export const allSportNewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_SPORTS':
      return action.sports;
    default:
      return state;
  } 
};
