import axios from 'axios';
const SET_FAV = 'SET_FAV';
const GET_FAV = 'GET_FAV';
const ADD_FAVE = 'ADD_FAV';
const DELETE_FAVE = 'DELETE_FAVE';

export const setFav = favs => {
  return {
    type: SET_FAV,
    favs,
  };
};
export const getOneFave = fave => {
  return {
    type: GET_FAV,
    fave,
  };
};
export const addFave = fave => {
  return {
    type: ADD_FAVE,
    fave,
  };
};
export const deleteFave = id => {
  return {
    type: GET_FAV,
    id,
  };
};
// export const getFaveRecipes = () => {
//   return async (dispatch, getState) => {
//     const user = getState().activeUser;
//     const favorits = (await axios.get('/api/favorits')).data;
//     const userFavorits = favorits.filter(fav => fav.userId === user.is);
//     return dispatch(setFav(userFavorits));
//   };
// };
export const fetchFavs = () => {
  return dispatch => {
    return axios.get('/api/fav').then(favs => {
      console.log('&&&&fave', favs);
      return dispatch(setFav(favs.data));
    });
  };
};
export const createFav = fav => {
  return dispatch => {
    return axios
      .post('/api/fav', fav)
      .then(newFave => dispatch(addFave(newFave.data)));
  };
};
export const removeFav = id => {
  return async dispatch => {
    await axios.delete(`/api/fav/${id}`);
    return dispatch(deleteFave(id));
  };
};
const initialState = [];

const favoritsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV:
      return action.favs;
    case ADD_FAVE:
      return [...state, action.fave];
    case DELETE_FAVE:
      return state.filter(fav => fav.id !== action.id);
    default:
      return state;
  }
};
export default favoritsReducer;
