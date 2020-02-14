import axios from 'axios';
const GET_INSTRUCTION = 'GET_INSTRUCTION';
const getInstruction = instruct => {
  return {
    type: GET_INSTRUCTION,
    instruct,
  };
};
export const setUpInstructions = () => {
  return dispatch => {
    return axios
      .get('/api/instructions')
      .then(res => dispatch(getInstruction(res.data)))
      .catch(e => console.log('error in thunk:', e.message));
  };
};

export const setInstruction = id => {
  return dispatch => {
    return axios
      .post('/api/instructions', { id })
      .then(res => {
        console.log('ressss', res);
        return dispatch(getInstruction(res.data));
      })
      .catch(e => console.log('Error in thunk:', e.message));
  };
};
const initialState = {};

const instructionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTRUCTION:
      return action.instruct;
    default:
      return state;
  }
};
export default instructionReducer;
