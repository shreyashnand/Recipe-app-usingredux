import { RECIPE_SEARCH } from "./searchType";

export const recipeSearch = (recipeName = "") => {
  return {
    type: RECIPE_SEARCH,
    payload: recipeName
  };
};
