import { put, takeLatest, all, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import User from './../repository/User';
import Offers from './../repository/Offers';
import Restaurant from './../repository/Restaurant';
import {
  AUTH_SUCCESS,
  BASIC_SETUP,
  GET_FAVORITE,
  GET_FAVORITE_OFFERS,
  SEARCH_LOADING,
  USER_INFO,
  STORE_LATEST_OFFERS_COUNT,
  STORE_NEARBY_RESTAURANTS_COUNT,
  DYNAMIC_BACKGROUND,
  NOTIFICATIONS_STATE
} from './../constants/ActionTypes';
import {
  getRoute
} from './../services/Api';
/**
 * Generates the basic setup.
 *
 * @generator
 * @yields {string} get the access toke from the database.
 * @yields {object} get favorite restaurants ids from the database.
 * @yields {call} Api request.
 * @yields {ReduxAction} store the access token in the token state.
 * @yields {ReduxAction} store favorite restaurants ids in
 *   the favoriteRestaurantsId state.
 * @yields {ReduxAction} store the adv data in the adv images state.
 * @yields {Action} navigate to the home screen.  
 */
function* setup(action) {
  const latitude = yield action.payload.latitude;
  const longitude = yield action.payload.longitude;
  const radius = yield action.payload.radius;
  const url = '?latitude=' + latitude + '&longitude=' + longitude + '&radius=' + radius;
  try {
    const [
      accessToken,
      favoriteRestaurantsId,
      favoriteOffersId,
      userInfo,
      notifications
    ] =
      yield all([
        yield User.getAccessToken(),
        yield Restaurant.getRestaurantsId(),
        yield Offers.getOfferssId(),
        yield User.getUserInfo(),
        yield User.getNotifications(),
      ]);
    yield all([
      yield put({ type: AUTH_SUCCESS, payload: accessToken }),
      yield put({ type: GET_FAVORITE, payload: favoriteRestaurantsId }),
      yield put({ type: GET_FAVORITE_OFFERS, payload: favoriteOffersId }),
      yield put({ type: USER_INFO, payload: userInfo }),
      yield put({ type: NOTIFICATIONS_STATE, payload: notifications })
    ]);
    try {
      const getOffersCount = yield call(axios.get, getRoute('offersCount'));
      yield put({ type: STORE_LATEST_OFFERS_COUNT, payload: getOffersCount.data });
      const getNearByLocationsCount =
        yield call(axios.get, getRoute('nearbyRestaurantsCount') + url);
      yield put({ type: STORE_NEARBY_RESTAURANTS_COUNT, payload: getNearByLocationsCount.data });
      const dynamicBackground = yield call(axios.get, getRoute('dynamicBackground'));
      yield put({ type: DYNAMIC_BACKGROUND, payload: dynamicBackground.data[0].image });
    } catch (error) {
      yield Actions.homeScreen();
    }
    yield Actions.homeScreen();
    yield put({ type: SEARCH_LOADING, payload: false });
  } catch (error) {
    yield Actions.homeScreen();
    console.log(error);
  }
}
/**
 * Used for making Api requests
 * 
 * @generator
 * @yields {takeLatest} dispatch setup function.
 */
export function* setupSaga() {
  yield takeLatest(BASIC_SETUP, setup);
}
