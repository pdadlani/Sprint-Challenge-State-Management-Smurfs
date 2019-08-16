import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';

export const getData = () => dispatch => {
  console.log('getData is called');
  dispatch({ type: GET_SMURFS_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log('res in getData', res.data);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.response })
    })
}

export const postData = newSmurf => dispatch => {
  dispatch({ type: POST_SMURFS_START });
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      console.log('newSmurf is posting', res.data)
    })
    .catch(err => {
      dispatch({ type: POST_SMURFS_FAILURE, payload: err.response })
    })
}