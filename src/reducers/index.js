import { combineReducers } from "redux";
import { loadingReducer } from './loadingReducer';
import { allBooksReducer } from './allBooksReducer'
import { categoryReducer } from "./categoryReducer";
import { hasErroredReducer } from './hasErroredReducer';
import { allTopTravelReducer } from '../reducers/allTopTravelReducer';
import { allSportNewsReducer } from "./allSportNewsReducer";


const rootReducer = combineReducers({
  isLoading: loadingReducer,
  allBooks: allBooksReducer,
  allTravel: allTopTravelReducer,
  allSports: allSportNewsReducer,
  categories: categoryReducer,
  error: hasErroredReducer
})

export default rootReducer