import { takeLatest, call, put } from 'redux-saga/effects'; 
import axios from 'axios';
import {
  NetInfo
} from 'react-native';
import { 
  RESTAURANT_DETAILS,
  STORE_RESTAURANT_DETAILS,
  SEARCH_LOADING,
  NEARBY_RESTAURANTS,
  STORE_NEARBY_RESTAURANTS,
  RESTAURANTS_EVALUATION,
  RESTAURANTS_SERVICES_EVALUATION,
  DISH_DETAILS,
  SEARCH_DETAILS_LOADING,
  STORE_DISH_DETAILS,
  GET_OFFERS,
  STORE_ALL_OFFERS,
  GET_MENU,
  STORE_LATEST_OFFERS,
  GET_LATEST_OFFERS,
  STORE_MENU
} from './../constants/ActionTypes';
import Cashing from './../repository/Cashing';
import { getRoute } from './../services/Api';
/**
 * Generates the restaurant details requests.
 *
 * @generator
 * @param {ReduxAction} action The dispatched action 
 * @yields {ReduxAction} Set the loading state to true.  
 * @yields {call} Get the restaurant details.
 * @yields {ReduxAction} Store the restaurant details in the application state.
 * @yields {ReduxAction} Set the loading state to false.  
 */
function* restaurantDetails(action) {
  const restaurantId = action.payload;
  let response;
  try {
    yield put({ type: SEARCH_DETAILS_LOADING, payload: true });
    response = yield call(axios.post, getRoute('restaurant'), { restaurantId });
    yield put({ type: STORE_RESTAURANT_DETAILS, payload: response.data });
    yield put({ type: SEARCH_DETAILS_LOADING, payload: false });
  } catch (error) {
    yield put({ type: STORE_RESTAURANT_DETAILS, payload: [] });
    yield put({ type: SEARCH_DETAILS_LOADING, payload: false });
    yield alert('Please check your internet connection and try again');
  }
}
/**
 * Generates the dish details requests.
 *
 * @generator
 * @param {ReduxAction} action The dispatched action 
 * @yields {ReduxAction} Set the loading state to true.  
 * @yields {call} Get the restaurant details.
 * @yields {ReduxAction} Store the restaurant details in the application state.
 * @yields {ReduxAction} Set the loading state to false.  
 */
function* dishDetails(action) {
  const id = action.payload;
  let response;
  try {
    yield put({ type: SEARCH_LOADING, payload: true });
    response = yield call(axios.post, getRoute('dish'), { id });
    yield put({ type: STORE_DISH_DETAILS, payload: response.data });
    yield put({ type: SEARCH_LOADING, payload: false });
  } catch (error) {
    yield put({ type: STORE_DISH_DETAILS, payload: [] });
    yield put({ type: SEARCH_DETAILS_LOADING, payload: false });
    yield alert('Please check your internet connection and try again');
  }
}


/**
 * Generates the nearby restaurants requests
 *
 * @generator
 * @yields {call} Get the nearby restaurant.
 * @yields {ReduxAction} Store the nearby restaurant in the application state.  
 */
function* getNearByLocations(action) {
  let response;
  const latitude = action.payload.latitude;
  const longitude = action.payload.longitude;
  const radius = action.payload.radius;
  try {
    response = yield call(
      axios.post,
      getRoute('near_by_search'),
      { latitude, longitude, radius }
    );
    yield put({ type: STORE_NEARBY_RESTAURANTS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Generates the restaurants rating request.
 *
 * @generator
 * @param {ReduxAction} action The dispatched action 
 * @yields {call} Send reating request. 
 */
function* storeEvaluation(action) {
  let response;
  const id = action.payload.id;
  const evaluationValue = action.payload.evaluationValue;
  try {
    response = yield call(axios.post, getRoute('rating'),
      { id, evaluationValue }
    );
  } catch (error) {
    console.log(error);
  }
}
/**
 * Generates the restaurants evaluation request.
 *
 * @generator
 * @param {ReduxAction} action The dispatched action 
 * @yields {call} Send evaluations requests. 
 * @yields {call} Send update requests. 
 * @yields {ReduxAction} Update restaurant data.
 */
function* storeServicesEvaluation(action) {
  let restaurantResponse;
  let response;
  const id = action.payload.id;
  const evaluationValue = action.payload.evaluationValue;
  const evaluationType = action.payload.evaluationType;
  try {
    response = yield call(
      axios.post, getRoute('evaluation'),
      { id, evaluationValue, evaluationType }
    );  
    restaurantResponse = yield call(
      axios.post, getRoute('restaurant'),
      { restaurantId: id }
    );
    yield put({ type: STORE_RESTAURANT_DETAILS, payload: restaurantResponse.data });
  } catch (error) {
    console.log(error);
  }
}
/**
 * Generates get all offers request.
 *
 * @generator
 */
function* getOffers() {
  let response;
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('offers');
  const cashedData = yield Cashing.getCashedData(key);
  if (isConnected) {
    try {
      response = yield call(axios.get, getRoute('offers'));
      yield put({ type: STORE_ALL_OFFERS, payload: response.data.offers });
      yield put({ type: SEARCH_LOADING, payload: false });
      yield Cashing.casheData(key, response.data.offers);
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: STORE_ALL_OFFERS, payload: parsedData.data });
          yield put({ type: SEARCH_LOADING, payload: false });
        } else {
          yield alert('Please check your internet connection and try again');
          yield put({ type: SEARCH_LOADING, payload: false });
        }
      } catch (e) {
        yield alert('Please check your internet connection and try again');
        yield put({ type: SEARCH_LOADING, payload: false });
      }
    }
  } else if (cashedData) {
    //Get cashed data from the database
    const parsedData = JSON.parse(cashedData);
    yield put({ type: STORE_ALL_OFFERS, payload: parsedData });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}
/**
 * Generates get latest offers request.
 *
 * @generator
 */
function* getLatestOffers() {
  let response;
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('latestOffers');
  const cashedData = yield Cashing.getCashedData(key);
  if (isConnected) {
    try {
      response = yield call(axios.get, getRoute('latestOffers'));
      yield put({ type: STORE_LATEST_OFFERS, payload: response.data.offers });
      yield put({ type: SEARCH_LOADING, payload: false });
      yield Cashing.casheData(key, response.data.offers);
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: STORE_LATEST_OFFERS, payload: parsedData.data });
          yield put({ type: SEARCH_LOADING, payload: false });
        } else {
          yield alert('Please check your internet connection and try again');
          yield put({ type: SEARCH_LOADING, payload: false });
        }
      } catch (e) {
        yield alert('Please check your internet connection and try again');
        yield put({ type: SEARCH_LOADING, payload: false });
      }
    }
  } else if (cashedData) {
    //Get cashed data from the database
    const parsedData = JSON.parse(cashedData);
    yield put({ type: STORE_LATEST_OFFERS, payload: parsedData });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}


/**
 * Generates get the restaurant menu.
 *
 * @generator
 */
function* getMenu(action) {
  let response;
  const id = action.payload;
  const url = '?id=' + id;
  try {
    yield put({ type: SEARCH_DETAILS_LOADING, payload: true });
    response = yield call(axios.get, getRoute('restaurantMenu') + url);
    yield put({ type: STORE_MENU, payload: response.data });
    yield put({ type: SEARCH_DETAILS_LOADING, payload: false });
  } catch (error) {
    yield put({ type: SEARCH_DETAILS_LOADING, payload: false });
    yield put({ type: STORE_MENU, payload: {} });
    console.log(error);
  }
}
/**
 * Used for making Api requests.
 * 
 * @generator
 * @yields {takeLatest} dispatch restaurantDetails function.
 * @yields {takeLatest} dispatch getNearByLocations function.
 * @yields {takeLatest} dispatch storeEvaluation function.
 * @yields {takeLatest} dispatch storeServicesEvaluation function.
 * @yields {takeLatest} dispatch dishDetails function.
 * @yields {takeLatest} dispatch getOffers function.
 * @yields {takeLatest} dispatch getLatestOffers function.
 */
export function* getDetailsSaga() {
  yield takeLatest(RESTAURANT_DETAILS, restaurantDetails); 
  yield takeLatest(NEARBY_RESTAURANTS, getNearByLocations); 
  yield takeLatest(RESTAURANTS_EVALUATION, storeEvaluation); 
  yield takeLatest(RESTAURANTS_SERVICES_EVALUATION, storeServicesEvaluation); 
  yield takeLatest(DISH_DETAILS, dishDetails); 
  yield takeLatest(GET_OFFERS, getOffers); 
  yield takeLatest(GET_LATEST_OFFERS, getLatestOffers); 
  yield takeLatest(GET_MENU, getMenu); 
}
