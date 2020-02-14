import axios from 'axios';
const GET_RECIPEINFO = 'GET_RECIPEINFO';

export const getRecipeInfo = recipe => {
  return {
    type: GET_RECIPEINFO,
    recipe,
  };
};
export const recipeDetails = id => {
  return async (dispatch, getState) => {
    const recipes = getState().recipes;
    const recipe = recipes.find(rec => rec.id === id);
    return dispatch(getRecipeInfo(recipe));
  };
};
const initialState = {};

const recipeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPEINFO:
      return action.recipe;
    default:
      return state;
  }
};
export default recipeDetailsReducer;
