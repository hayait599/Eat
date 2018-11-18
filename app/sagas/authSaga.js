import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import {
  LoginManager,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from 'react-native-fbsdk';
import {
  NetInfo, Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getRoute } from './../services/Api';
import User from './../repository/User';
import Restaurant from './../repository/Restaurant';
import Offers from './../repository/Offers';
import {
  USER_LOGIN,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOADING,
  FACEBOOK_LOGIN,
  USER_SIGNUP,
  USER_INFO,
  USER_LOGOUT,
  REMOVE_ALL_FAVORITE,
  FORGOT_PASSWORD,
  NOTIFICATIONS_STATE
} from './../constants/ActionTypes';
/**
 * Generates the email login.
 *
 * @generator
 * @param {ReduxAction} action used to pass the action property
 * @yields {call} make an API call.  
 * @yields {ReduxAction} store the access token in the token state.
 * @yields {ReduxAction} sets the error state to null if there were no errors
 * @yields {ReduxAction} sets the loading state to null 
 * @yields {object} store the access token in the database. 
 * @yields {Action} navigate to the profile screen.  
 */
function* userAccessToken(action) {
  let response;
  const email = action.payload.email;
  const password = action.payload.password;
  const isConnected = yield call(NetInfo.isConnected.fetch);
  if (isConnected) {
    try {
      response = yield call(axios.post, getRoute('login'), { email, password });
      if (response.data) {
        yield put({ type: AUTH_SUCCESS, payload: response.data.loginId });
        yield put({ type: USER_INFO, payload: response.data.userName });
        yield put({ type: AUTH_FAILURE, payload: null });
        yield User.insertUser(
          String(response.data.id),
          response.data.loginId,
          response.data.mobile,
          response.data.userFullName
        );
        yield put({ type: USER_INFO, payload: response.data.userFullName });
        yield Actions.profileScreen({ navBack: false });
      } else {
        yield put({ type: AUTH_LOADING, payload: false });
        yield put({ type: AUTH_FAILURE, payload: 'please enter a vailed email or password' });
      }
    } catch (error) {
      yield put({ type: AUTH_LOADING, payload: false });
      yield put({ type: AUTH_FAILURE, payload: error.response.data.error });
    }
  } else {
    yield put({ type: AUTH_LOADING, payload: false });
    alert('please check your internet connection and try again');
  }
}
/**
 * Generates the facebook login.
 *
 * @generator
 * @yields {SagaCall} login using facebook account.  
 * @yields {object} get facebook access token.
 * @yields {ReduxAction} sets the access token state.
 * @yields {object} store the access token in the database. 
 * @yields {Action} navigate to the profile screen. 
 * @yields {ReduxAction} if the login failed set the value of the error state. 
 */
function* facebookSignin() {
  let userName;
  const isConnected = yield call(NetInfo.isConnected.fetch);
  if (isConnected) {
    yield LoginManager.logInWithReadPermissions([
      'public_profile'
    ]);
    const data = yield AccessToken.getCurrentAccessToken();
    yield put({ type: AUTH_SUCCESS, payload: data.accessToken.toString() });
    const infoRequest = yield new GraphRequest(
      '/me', {
        accessToken: data.accessToken.toString(),
        parameters: {
          fields: {
            string: 'email,name,first_name,middle_name,last_name'
          }
        }
      },
      (error, result) => {
        if (result) {
          axios.post(getRoute('registerViaFacebook'), {
            id: data.userID.toString(),
            name: result.name,
            token: data.accessToken.toString()
          })
            .then(function (response) {
              User.insertUser(
                String(response.data),
                data.accessToken.toString(),
                null,
                result.name
              );
              Actions.profileScreen({ navBack: false, userName: result.name });
            });
        }
      }
    );
    yield new GraphRequestManager().addRequest(infoRequest).start();
  } else {
    yield put({ type: AUTH_LOADING, payload: false });
    alert('please check your internet connection and try again');
  }
}
/**
 * Generates the user's registration.
 *
 * @generator
 * @param {ReduxAction} action used to pass the action property
 * @yields {call} make an API call.  
 * @yields {ReduxAction} store the access token in the token state.
 * @yields {ReduxAction} sets the error state to null if there were no errors
 * @yields {object} store the access token in the database. 
 * @yields {ReduxAction} sets the loading state to null 
 * @yields {Action} navigate to the profile screen.  
 */
function* registration(action) {
  let response;
  const email = action.payload.email;
  const password = action.payload.password;
  const userName = action.payload.userName;
  const mobile = action.payload.mobile;
  const isConnected = yield call(NetInfo.isConnected.fetch);
  if (isConnected) {
    try {
      response = yield call(axios.post, getRoute('singup'), {
        email, password, userName, mobile
      });
      yield put({ type: AUTH_SUCCESS, payload: response.data.loginId });
      
      yield put({ type: USER_INFO, payload: userName });
      yield put({ type: AUTH_FAILURE, payload: null });
      yield User.insertUser(String(response.data.id), response.data.loginId, null, userName);
      yield put({ type: AUTH_LOADING, payload: false });
      yield Actions.profileScreen({ navBack: false });
    } catch (error) {
      yield put({ type: AUTH_FAILURE, payload: error.response.data.error });
      yield put({ type: AUTH_LOADING, payload: false });
    }
  } else {
    yield put({ type: AUTH_LOADING, payload: false });
    alert('please check your internet connection and try again');
  }
}

/*
 * Selector. Select the authentication state
 */
export const getAuthentication = (state) => state.Authentication;
/**
 * Generates the logout.
 *
 * @generator
 * @yields {select} select the authentication state.  
 * @yields {object} remove all favorite restaurants from the database.
 * @yields {call} make an API call.  
 * @yields {ReduxAction} sets the toke state to null.
 * @yields {Action} navigate to the home screen.  
 */
function* logout() {
  try {
    yield User.deleteAll();
    yield Restaurant.deleteRestaurants();
    yield Offers.deleteOffers();
    yield put({ type: USER_INFO, payload: '' });
    yield put({ type: REMOVE_ALL_FAVORITE, payload: [] });
    yield put({ type: AUTH_SUCCESS, payload: '' });
    yield put({ type: NOTIFICATIONS_STATE, payload: false });
    yield Actions.homeScreen();
  } catch (error) {
    Alert.alert('', 'تم تسجيل الخروج بنجاح');
  }
}
/**
 * Generates the forgot password function.
 *
 * @generator
 * @param {ReduxAction} action used to pass the action property
 */
function* forgotPassword(action) {
  let response;
  const email = action.payload.email;
  const isConnected = yield call(NetInfo.isConnected.fetch);
  if (isConnected) {
    try {
      response = yield call(axios.get, getRoute('forgotPassword'), { email }); //DATA


      yield Actions.homeScreen();
      yield Alert.alert('', 'تم ارسال طلبك بنجاح');
    } catch (error) {
      Alert.alert('please check your internet connection and try again');
    }
  } else {
    Alert.alert('please check your internet connection and try again');
  }
}
/**
 * Used for making Api requests.
 * 
 * @generator
 * @yields {takeLatest} dispatch userAccessToken function.
 * @yields {takeLatest} dispatch logout function.
 * @yields {takeLatest} dispatch facebookSignin function.
 * @yields {takeLatest} dispatch registration function.
 */
export function* authSaga() {
  yield takeLatest(USER_LOGIN, userAccessToken);
  yield takeLatest(USER_LOGOUT, logout);
  yield takeLatest(FACEBOOK_LOGIN, facebookSignin);
  yield takeLatest(USER_SIGNUP, registration);
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}
