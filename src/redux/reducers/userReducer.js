import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED,  SET_UNAUTHENTICATED} from '../types.js';

const initialState = {
  authenticated: false,
  credentials: {}
};

export default function(state = initialState, action){
  switch(action.type){
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    case SET_UNAUTHENTICATED:
      return initialState;

    case SET_USER:
      return {
        authenticated: true,
        ...action.payload
      };

    default:
      return state;
  };
};
