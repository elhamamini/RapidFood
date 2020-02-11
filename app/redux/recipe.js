import axios from 'axios';
const GET_RECIPE = 'GET_RECIPE';
const PICK_INGREDIENT = 'PICK_INGREDIENT';
export const getIngredient = ingredient => {
  return {
    type: PICK_INGREDIENT,
    ingredient,
  };
};
export const getRecipe = recipe => {
  return {
    type: GET_RECIPE,
    recipe,
  };
};

export const setRecipe = () => {
  return dispatch => {
    return axios
      .get('/api/recipes')
      .then(res => dispatch(getRecipe(res.data)))
      .catch(e => console.log('error in thunk:', e.message));
  };
};
export const sendIngredient = ingredient => {
  return dispatch => {
    return axios
      .post('/api/recipes', ingredient)
      .then(res => dispatch(getRecipe(res.data)))
      .catch(e => console.log('error in thunk:', e.message));
  };
};
const initialState = [];

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return action.recipe;
    default:
      return state;
  }
};
export default recipeReducer;
