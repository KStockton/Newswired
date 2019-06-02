import { cleanBooks } from '../Utility/Cleaners/cleanBooks'

export const allBooksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ALL_BOOKS':
        const cleanedBooks = cleanBooks(action.books)
      return [...state, ...cleanedBooks]
      default:
          return state
    }
}

