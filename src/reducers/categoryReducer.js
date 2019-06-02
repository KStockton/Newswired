let previousState = {
  topNews: false,
  books: false,
  movieReview: false,
  latestNews: false
}


export const categoryReducer = (state = previousState, action) => {
  switch(action.type) {
    case 'SET_NEWS_CATEGORY':
      // let selectedCategory = action.category
      return Object.assign( {}, state, { [`${action.category}`]: !state[action.category]})
   default:
      return state;
  }
}