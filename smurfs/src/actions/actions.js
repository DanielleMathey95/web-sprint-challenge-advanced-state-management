import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
export const REMOVE_FAILURE = 'REMOVE_FAILURE';

export const fetchSmurfs = () => dispatch => {
  dispatch({
    type: START_FETCHING
  })
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => 
      dispatch ({
        type: FETCH_SUCCESS,
        payload: response.data
      }))
    .catch(error => 
      dispatch({
        type: FETCH_FAILURE,
        payload: error.response
    }))
};

export const addSmurf = (name, age, height) => dispatch => {
  dispatch({ type: ADD_START})
    axios
      .post('http://localhost:3333/smurfs', {name, age, height})
      .then(response => dispatch({
        type: ADD_SUCCESS,
        payload: response.data
      }))
      .catch(error => dispatch({
        type: ADD_FAILURE,
        payload: error.response
      }))
}

export const removeSmurf = (id) => dispatch => {
  dispatch({
    type: REMOVE_ITEM
  })
    axios
      .delete('http://localhost:3333/smurfs/${id}')
      .then(response => dispatch({
          type: REMOVE_SUCCESS,
          payload: response.data
      }))
      .catch(error => dispatch ({
        type: REMOVE_SUCCESS,
        payload: error.response
      }))
};