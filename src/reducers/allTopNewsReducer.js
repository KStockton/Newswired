export const allTopNewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_TOP_NEWS':
      return action.news;
    default:
      return state;
  } 
};
