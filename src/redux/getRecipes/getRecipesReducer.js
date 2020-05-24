import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE
} from "./getRecipesType";

const intialState = {
  isLoading: true,
  recipes: [],
  error: ""
};

const getRecipesReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload,
        error: ""
      };

    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isLoading: false,
        recipes: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default getRecipesReducer;
