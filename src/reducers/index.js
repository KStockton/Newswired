import { combineReducers } from "redux";
import { loadingReducer } from './loadingReducer';
import { allBooksReducer } from './allBooksReducer'
import { categoryReducer } from "./categoryReducer";
import { allTopTravelReducer } from '../reducers/'


const rootReducer = combineReducers({
  isLoading: loadingReducer,
  allBooks: allBooksReducer,
  categories: categoryReducer

})

export default rootReducer