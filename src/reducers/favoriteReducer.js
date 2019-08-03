export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const checkFave = state.find(fave => fave.id === action.id);
      if (checkFave === undefined){
        return [...state, {id: action.id}];
      } else {
        const removeFave = state.filter(fave => fave.id !== action.id);
        return removeFave;
      }
    default:
      return state;
  }
};