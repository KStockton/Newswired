import { combineReducers } from "redux";
import { loadingReducer } from './loadingReducer';
import { allBooksReducer } from './allBooksReducer'
import { categoryReducer } from "./categoryReducer";
import { allTopTravelReducer } from '../reducers/allTopTravelReducer';


const rootReducer = combineReducers({
  isLoading: loadingReducer,
  allBooks: allBooksReducer,
  allTravel: allTopTravelReducer,
  categories: categoryReducer
})

export default rootReducer