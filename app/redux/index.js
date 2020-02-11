import { combineReducers } from 'redux';
import recipeReducer from './recipe';
const appReduer = combineReducers({
  recipe: recipeReducer,
});

export default appReduer;
