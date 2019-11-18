import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types.js';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const signInUser = (userData, navigate) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('https://us-central1-theradar-6242d.cloudfunctions.net/api/logIn', userData)
    .then(res => {
    const fBIdToken = `Bearer ${res.data.token}`;
    const gsToken = res.data.gsToken;
    const storeToken = async () => {
          try {
             await AsyncStorage.multiSet([["FBIdToken", fBIdToken], ["gsToken", gsToken]]);
          } catch (error) {
            console.log("Something went wrong", error);
          };
        };
      storeToken();
      axios.defaults.headers.common['Authorization'] = fBIdToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      navigate('Channels');
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response
      });
    });
};

export const signUpUser = (newUserData, navigate) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('https://us-central1-theradar-6242d.cloudfunctions.net/api/signUp', newUserData)
    .then(res => {
    const fBIdToken = `Bearer ${res.data.token}`;
    const gsToken = res.data.gsToken;

    const storeToken = async () => {
          try {
             await AsyncStorage.multiSet([["FBIdToken", fBIdToken], ["gsToken", gsToken]]);
          } catch (error) {
            console.log("Something went wrong", error);
          };
        };
      storeToken();
      axios.defaults.headers.common['Authorization'] = fBIdToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      navigate('Channels');
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response
      });
    });
};

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({
    type: SET_UNAUTHENTICATED
  });
};

export const getUserData = () => (dispatch) => {
  axios.get('https://us-central1-theradar-6242d.cloudfunctions.net/api/userData')
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
