import React, { useState } from "react";
import Header from "./Header/Header";
import RecipeList from "./RecipeList/RecipeList";
import { connect } from "react-redux";
import { recipeSearch } from "../redux/index";
import styles from "./RecipeContainer.module.css";
import Loader from "./Loader/Loader";
function RecipeContainer(props) {
  const [searchRecipe, setSearchRecipe] = useState("");
  return (
    <div>
      <Header />
      <br />

      <div className="search-form">
        <input
          className={styles.searchBar}
          type="text"
          onChange={e => setSearchRecipe(e.target.value)}
        />
        <button
          className={styles.searchButton}
          type="submit"
          onClick={() => props.recipeSearch(searchRecipe)}
        >
          Search
        </button>
        <br />
        <br />
        <div>YOU SEARCHED FOR : {props.recipeName} </div> <br />
        <RecipeList recipeName={props.recipeName} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipeName: state.searchReducer.recipeName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    recipeSearch: searchRecipe => dispatch(recipeSearch(searchRecipe))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeContainer);
