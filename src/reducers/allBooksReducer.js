export const allBooksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_BOOKS':
      return action.books;
    default:
      return state;
  }
};

