import { RECIPE_SEARCH } from "./searchType";

const initialState = {
  recipeName: ""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_SEARCH:
      return {
        ...state,
        recipeName: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
