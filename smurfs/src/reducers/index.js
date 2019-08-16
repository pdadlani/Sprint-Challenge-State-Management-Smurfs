import { 
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILURE,
  PUT_SMURFS_START,
  PUT_SMURFS_SUCCESS,
  PUT_SMURFS_FAILURE,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  getSmurfs: false,
  postSmurfs: false,
  putSmurfs: false,
  deleteSmurf: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        error: '',
        getSmurfs: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        getSmurfs: false,
        smurfs: action.payload
      }
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        getSmurfs: false,
        error: action.payload
      }
    case POST_SMURFS_START:
      return {
        ...state,
        error: '',
        postSmurfs: true
      }
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        postSmurfs: false,
        smurfs: [...state.smurfs, action.payload]
      }
    case POST_SMURFS_FAILURE:
      return {
        ...state,
        postSmurfs: false,
        error: action.payload
      }
    case PUT_SMURFS_START:
      return {
        ...state,
        error: '',
        putSmurfs: true
      }
    case PUT_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        putSmurfs: false,
        smurfs: [...state.smurfs, action.payload]
      }
    case PUT_SMURFS_FAILURE:
      return {
        ...state,
        putSmurfs: false,
        error: action.payload
      }
    case DELETE_SMURFS_START:
      return {
        ...state,
        error: '',
        deleteSmurfs: true
      }
    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        deleteSmurfs: false,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id)
      }
    case DELETE_SMURFS_FAILURE:
      return {
        ...state,
        deleteSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}