import { cleanNYTBooks } from '../Utility/Cleaners/cleanNYTBooks'

export const allBooksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ALL_BOOKS':
      console.log(action.books)
        const cleanedBooks = cleanNYTBooks(action.books)
      return [...state, ...cleanedBooks]
      default:
          return state
    }
}

