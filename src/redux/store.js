import { createStore, applyMiddleware } from "redux";
// import searchReducer from "./search/searchReducer";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
