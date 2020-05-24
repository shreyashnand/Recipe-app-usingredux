import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../../redux/index";
import styles from "./RecipeList.module.css";
import Loader from "../Loader/Loader";

function RecipeList(props) {
  const { fetchRecipes, recipesData, isLoading, recipeName } = props;

  useEffect(() => {
    fetchRecipes(recipeName);
  }, [recipeName]);
  return (
    <div className={styles.recipeContainer}>
      {isLoading ? (
        <Loader />
      ) : recipesData.length !== 0 ? (
        recipesData.map((recipe, index) => (
          <div key={index} className={styles.recipe}>
            <h2>{recipe.recipe.label}</h2> <br />
            <img
              src={recipe.recipe.image}
              className={styles.recipeImg}
              alt="recipe"
            />
            <ul>
              <h3>Ingredients :</h3>
              <br />
              {recipe.recipe.ingredients.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>{" "}
            <br />
            <div>
              <div>
                <strong>Calories :</strong> {recipe.recipe.calories}
              </div>
              <br />
              <div>
                <strong>Read more at: </strong>
                <a href={recipe.recipe.url} target="_blank">
                  Link
                </a>
              </div>
            </div>
            <br />
            <br />
          </div>
        ))
      ) : (
        <div className={styles.notFound}>Result not found</div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    recipesData: state.getRecipesReducer.recipes,
    isLoading: state.getRecipesReducer.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipes: (recipeName = "chicken") => dispatch(fetchRecipes(recipeName))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
