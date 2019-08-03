let previousState = {
  topNews: false,
  books: false,
  sportsNews: false,
  travel: false
};


export const categoryReducer = (state = previousState, action) => {
  switch (action.type) {
    case 'SET_NEWS_CATEGORY':
      return Object.assign( {}, state, { [`${action.category}`]: !state[action.category]});
    default:
      return state;
  } 
};