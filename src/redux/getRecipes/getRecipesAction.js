import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE
} from "./getRecipesType";
import Axios from "axios";

const APP_ID = "3b674be6";
const APP_KEY = "3973974e10a1e26557b24283470cc331";

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST
  };
};

export const fetchRecipesSuccess = recipes => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes
  };
};

export const fetchRecipesFailure = error => {
  return {
    type: FETCH_RECIPES_FAILURE,
    payload: error
  };
};

export const fetchRecipes = (recipeName = "chicken") => {
  console.log(recipeName);
  // if no text serached by decault shows chicken recipes
  if (recipeName === "") {
    recipeName = "chicken";
  }
  return dispatch => {
    dispatch(fetchRecipesRequest);
    Axios.get(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(res => {
        console.log(res.data.hits);
        dispatch(fetchRecipesSuccess(res.data.hits));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchRecipesFailure(errorMsg));
      });
  };
};
