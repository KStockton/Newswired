export const hasErroredReducer = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERROR':
      return action.message;
    default:
      return state;
  }
};