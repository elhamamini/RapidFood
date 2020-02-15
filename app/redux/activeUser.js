import axios from 'axios';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './authentication.js';
// const SET_USER = Symbol('set_user');
const EDIT_USER = Symbol('edit_user');
const ADDTO_USER = 'ADDTO_USER';
// const initialState = {
//   name: '',
//   email: '',
//   password: '',
//   recipeId: [],
// };

const editActiveUser = editedUser => {
  return {
    type: EDIT_USER,
    editedUser,
  };
};
const addRecipeIdActiveUser = userWithRecipeID => {
  return {
    type: ADDTO_USER,
    userWithRecipeID,
  };
};
// export const addRecipeId = id => {
//   return async (dispatch, getState) => {
//     const user = getState().activeUser;
//     console.log('user', user);

//     let userNewInfo = await axios.put(`/api/users/${user.id}`, {
//       recipeId: user.recipeId.push(id),
//     }).data;
//     console.log('new user info', userNewInfo);

//     return dispatch(addRecipeIdActiveUser(userNewInfo));
//   };
// };
export const addRecipeId = id => {
  return (dispatch, getState) => {
    console.log('add recipe thunk');
    const recipes = getState().activeUser.recipeId;
    recipes.push(id);
    return axios
      .put(`/api/users/${getState().activeUser.id}`, {
        recipeId: recipes,
      })
      .then(newUser => {
        console.log('newUser', newUser);
        dispatch(addRecipeIdActiveUser(newUser.data));
      });
  };
};
export const modifyUser = edits => {
  return async (dispatch, getState) => {
    const user = getState().activeUser;
    let editedUser = {};
    if (getState().authentication.isLoggedIn) {
      editedUser = (await axios.put(`/api/users/${user.id}`, edits)).data;
    } else {
      editedUser = {
        ...user,
        ...edits,
      };
      console.log('edited guest user in Modify User thunk:', editedUser);
    }

    return dispatch(editActiveUser(editedUser));
  };
};
const initialState = {
  name: '',
  email: '',
  password: '',
  recipeId: [],
};
const activeUserReducer = (state = initialState, action) => {
  const activeUser = action.activeUser;
  const editedUser = action.editedUser;
  switch (action.type) {
    case SIGN_IN:
      return activeUser;
    case SIGN_UP:
      return activeUser;
    case ADDTO_USER:
      return action.userWithRecipeID;
    case EDIT_USER:
      return editedUser;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default activeUserReducer;
