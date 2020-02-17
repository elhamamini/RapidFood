import axios from 'axios';
const GET_NUTRITION = 'GET_NUTRITION';
const getNutrition = nutrition => {
  return {
    type: GET_NUTRITION,
    nutrition,
  };
};
export const setUpNutritions = () => {
  return dispatch => {
    return axios
      .get('/api/nutritions')
      .then(res => dispatch(getNutrition(res.data)))
      .catch(e => console.log('error in thunk:', e.message));
  };
};

export const setNutrition = id => {
  return dispatch => {
    return axios
      .post('/api/nutritions', { id })
      .then(res => {
        return dispatch(getNutrition(res.data));
      })
      .catch(e => console.log('Error in thunk:', e.message));
  };
};
const initialState = {};

const nutritionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NUTRITION:
      return action.nutrition;
    default:
      return state;
  }
};
export default nutritionReducer;
