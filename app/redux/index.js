import { combineReducers } from 'redux';
import recipeReducer from './recipe';
import instructionReducer from './instruction';
import recipeDetailsReducer from './oneRecipe';
import authenticationReducer from './authentication';
import activeUserReducer from './activeUser';
import favoritsReducer from './favorits';
import nutritionReducer from './nutrition';
const appReduer = combineReducers({
  recipes: recipeReducer,
  recipe: recipeDetailsReducer,
  instruction: instructionReducer,
  authentication: authenticationReducer,
  activeUser: activeUserReducer,
  favorits: favoritsReducer,
  nutrition: nutritionReducer,
});

export default appReduer;
