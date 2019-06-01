import { combineReducers } from "redux";
import { loadingReducer } from './loadingReducer';
import { allBooksReducer } from './allBooksReducer'

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  allBooks: allBooksReducer
})

export default rootReducer