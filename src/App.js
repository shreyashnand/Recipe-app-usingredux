import React from "react";
import "./styles.css";
import RecipeContainer from "./components/RecipeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RecipeContainer />
      </div>
    </Provider>
  );
}
