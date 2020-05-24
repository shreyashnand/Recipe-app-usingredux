import { combineReducers } from "redux";
import searchReducer from "./search/searchReducer";
import getRecipesReducer from "./getRecipes/getRecipesReducer";

const rootReducer = combineReducers({
  searchReducer,
  getRecipesReducer
});

export default rootReducer;
