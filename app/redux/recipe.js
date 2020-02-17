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
// export const sendIngredient = ingredient => {
//   return dispatch => {
//     return axios
//       .post('/api/recipes', ingredient)
//       .then(res => dispatch(getRecipe(res.data)))
//       .catch(e => console.log('error in thunk:', e.message));
//   };
// };

export const sendIngredient = ing => {
  return async dispatch => {
    const recipes = (await axios.post('/api/recipes', ing)).data;

    let newRecipes = recipes.filter(async recipe => {
      let inst = (await axios.get(`api/instructions/${recipe.id}`)).data;
      if (inst.instructions) {
        return true;
      }
      return false;
    });
    // console.log('before', recipes.length);
    // console.log('after', newRecipes.length);
    dispatch(getRecipe(newRecipes));
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
