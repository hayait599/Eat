import { takeLatest, call, put, takeEvery, select } from 'redux-saga/effects';
import {
  NetInfo
} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import axios from 'axios';
import {
  DISH_SEARCH,
  RESTAURANT_SEARCH,
  ADD_RESTAURANTS,
  SEARCH_LOADING,
  FEATURED_RESTAURANTS,
  STORE_FEATURED_RESTAURANTS,
  GET_LOCATIONS,
  GET_KITCHEN_TYPES,
  STORE_RESTAURANTS_LOCATIONS,
  SEARCH_BY_SERVICE,
  CLEAR_SEARCH,
  STORE_KITCHEN_TYPES,
  GET_EVENTS,
  STORE_EVENTS,
  GET_FILTERED_RESTAURANTS,
  RESTAURANTS_CATEGORIZATION,
  SEARCH_FLAG,
  GET_FILTERED_RESTAURANTS_SCROLL,
  SET_FILTER_OBJECT,
  FILTER_FEATURED_RESTAURANTS,
  ONLINE_SEARCH,
  RELATED_DISH,
  GET_RELATED_DISH,
  STORE_TEMP
} from './../constants/ActionTypes';
import Cashing from './../repository/Cashing';
import { getRoute } from './../services/Api';

/*
 * Selector. Select the authentication state
 */
export const searchedText = (state) => state.searchedText;
/*
 * Selector. Select the restaurants state
 */
export const getRestaurants = (state) => state.SearchedData.restaurants;
/*
 * Selector. Select the tempRestaurants state
 */
export const getTempRestaurants = (state) => state.RestaurantData.tempRestaurants;
/*
 * Selector. Select the pageNumber state
 */
export const getPageNunmber = (state) => state.RestaurantData.pageNumber;
/*
 * Selector. Select the filteredObject state
 */
export const getFilteredObject = (state) => state.RestaurantData.filteredObject;
/**
 * Generates searching in restaurants menus.
 *
 * @generator
 * @yields {select} get the searchedText state.
 * @yields {call} Fetch the search resaults.
 * @yields {ReduxAction} store the search resaults in SearchedData state.
 */
function* searchForDish(action) {
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('search_dish') + JSON.stringify({ text, page });
  const cashedData = yield Cashing.getCashedData(key);
  const text = yield action.payload.text;
  const page = yield action.payload.page;
  let response;
  if (isConnected) {
    try {
      response = yield call(axios.post, getRoute('search_dish'), { text, page });
      yield put({ type: ADD_RESTAURANTS, payload: response.data });
      yield put({ type: SEARCH_LOADING, payload: false });
      yield Cashing.casheData(key, response);
    } catch (error) {
      //Get cashed data from the database
      try {
        //check if data is cashed
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: ADD_RESTAURANTS, payload: parsedData.data });
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
    if (cashedData) {
      const parsedData = JSON.parse(cashedData);
      yield put({ type: ADD_RESTAURANTS, payload: parsedData.data });
      yield put({ type: SEARCH_LOADING, payload: false });
    } else {
      yield alert('Please check your internet connection and try again');
      yield put({ type: SEARCH_LOADING, payload: false });
    }
  }
}
/**
 * Generates the search for restaurant.
 *
 * @generator
 * @param {ReduxAction} action The dispatched action 
 * @yields {string} get the access toke from the database.
 * @yields {ReduxAction} store the access token in the token state.
 * @yields {Action} navigate to the hone screen.  
 */
function* searchForRestaurant(action) {
  yield put({ type: SEARCH_LOADING, payload: true });
  const text = yield action.payload.text;
  const page = yield action.payload.page;
  const isConnected = yield call(NetInfo.isConnected.fetch);
  let response;
  //generate cashing key
  const key = yield getRoute('search') + JSON.stringify({ text, page });
  const cashedData = yield Cashing.getCashedData(key);
  yield put({ type: SEARCH_FLAG, payload: false });
  if (isConnected) {
    try {
      response = yield call(axios.post, getRoute('search'), { text, page });
      yield put({ type: ADD_RESTAURANTS, payload: response.data });
      yield put({ type: SEARCH_LOADING, payload: false });
      const restaurants = yield select(getRestaurants);
      yield put({ type: STORE_TEMP, payload: restaurants });
      yield Cashing.casheData(key, response);
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          
          yield put({ type: ADD_RESTAURANTS, payload: parsedData.data });
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
    yield put({ type: ADD_RESTAURANTS, payload: parsedData.data });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}
/**
 * Used to get featured restaurants.
 *
 * @generator
 * @yields {ReduxAction} set the loading state to true.
 * @yields {call} Fetch the featured restaurants
 * @yields {ReduxAction} set the loading state to false. 
 * @yields {ReduxAction} Store the fetched data in the application state. 
 */
function* filterFeaturedRestaurants(action) {
  const location = action.payload;
  let response;
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('featured_restaurants') + JSON.stringify({ location });
  const cashedData = yield Cashing.getCashedData(key);
  if (isConnected) {
    try {
      response = yield call(axios.post, getRoute('featured_restaurants'), { location });
      yield put({ type: SEARCH_LOADING, payload: false });
      yield put({ type: STORE_FEATURED_RESTAURANTS, payload: response.data });
      yield Cashing.casheData(key, response);
      
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: STORE_FEATURED_RESTAURANTS, payload: parsedData.data });
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
    yield put({ type: STORE_FEATURED_RESTAURANTS, payload: parsedData.data });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}
/**
 * Used to get featured restaurants.
 *
 * @generator
 * @yields {ReduxAction} set the loading state to true.
 * @yields {call} Fetch the featured restaurants
 * @yields {ReduxAction} set the loading state to false. 
 * @yields {ReduxAction} Store the fetched data in the application state. 
 */
function* getFeaturedRestaurants() {
  let response;
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('featured_restaurants');
  const cashedData = yield Cashing.getCashedData(key);
  if (isConnected) {
    try {
      response = yield call(axios.post, getRoute('featured_restaurants'));
      yield put({ type: SEARCH_LOADING, payload: false });
      yield put({ type: STORE_FEATURED_RESTAURANTS, payload: response.data });
      yield Cashing.casheData(key, response);
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: STORE_FEATURED_RESTAURANTS, payload: parsedData.data });
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
    yield put({ type: STORE_FEATURED_RESTAURANTS, payload: parsedData.data });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}

/**
 * Used to get restaurants locations.
 *
 * @generator
 * @yields {ReduxAction} set the loading state to true.
 * @yields {call} Fetch the featured restaurants
 * @yields {ReduxAction} set the loading state to false. 
 * @yields {ReduxAction} Store the fetched data in the application state. 
 */
function* getRestaurantsLocations() {
  let response;
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('locations');
  const cashedData = yield Cashing.getCashedData(key);
  if (isConnected) {
    try {
      response = yield call(axios.get, getRoute('locations'));
      yield put({ type: SEARCH_LOADING, payload: false });
      yield put({ type: STORE_RESTAURANTS_LOCATIONS, payload: response.data.locations });
      yield Cashing.casheData(key, response.data.locations);
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: STORE_RESTAURANTS_LOCATIONS, payload: parsedData.data });
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
    yield put({ type: STORE_RESTAURANTS_LOCATIONS, payload: parsedData });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}
/**
 * Used to get restaurants locations.
 *
 * @generator
 * @yields {ReduxAction} set the loading state to true.
 * @yields {call} Fetch the featured restaurants
 * @yields {ReduxAction} set the loading state to false. 
 * @yields {ReduxAction} Store the fetched data in the application state. 
 */
function* getKitchenTypes() {
  let response;
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('kitchenTypes');
  const cashedData = yield Cashing.getCashedData(key);
  if (isConnected) {
    try {
      response = yield call(axios.get, getRoute('kitchenTypes'));
      yield put({ type: SEARCH_LOADING, payload: false });
      yield put({ type: STORE_KITCHEN_TYPES, payload: response.data.kitchens });
      yield Cashing.casheData(key, response.data.locations);
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: STORE_KITCHEN_TYPES, payload: parsedData.data });
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
    yield put({ type: STORE_KITCHEN_TYPES, payload: parsedData });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}
/**
 * Used to get all events.
 *
 * @generator
 */
function* getEvents() {
  let response;
  yield put({ type: SEARCH_LOADING, payload: true });
  const isConnected = yield call(NetInfo.isConnected.fetch);
  //generate cashing key
  const key = yield getRoute('allEvents');
  const cashedData = yield Cashing.getCashedData(key);
  if (isConnected) {
    try {
      response = yield call(axios.get, getRoute('allEvents'));
      yield put({ type: SEARCH_LOADING, payload: false });
      yield put({ type: STORE_EVENTS, payload: response.data });
      yield Cashing.casheData(key, response.data);
    } catch (error) {
      //Get cashed data from the database
      try {
        if (cashedData) {
          const parsedData = JSON.parse(cashedData);
          yield put({ type: STORE_EVENTS, payload: parsedData.data });
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
    yield put({ type: STORE_EVENTS, payload: parsedData });
    yield put({ type: SEARCH_LOADING, payload: false });
  } else {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}
/**
 * Used to search for restaurants by a given location and sevices.
 *
 * @generator
 */
function* searchForRestaurantByService(action) {
  const locationId = action.payload.locationId;
  const services = action.payload.services;
  let response;
  try {
    yield put({ type: SEARCH_LOADING, payload: true });
    if (locationId === 0) {
      response = yield call(
        axios.post,
        getRoute('searchByServiceAndLocation'),
        { services }
      );
    } else if (services === 0) {
      response = yield call(
        axios.post,
        getRoute('searchByServiceAndLocation'),
        { locationId }
      );
    } else {
      response = yield call(
        axios.post,
        getRoute('searchByServiceAndLocation'),
        { locationId, services }
      );
    }
    if (response.data) {
      yield put({ type: CLEAR_SEARCH, payload: false });
      yield put({ type: ADD_RESTAURANTS, payload: response.data.restaurant });
      yield put({ type: SEARCH_LOADING, payload: false });
    }
  } catch (error) {
    yield alert('Please check your internet connection and try again');
  }
}
/**
 * Used to search for restaurants by a given location and sevices.
 *
 * @generator
 */
function* filterRestaurants(action) {
  const filterObject = action.payload;
  const searchText = filterObject.searchText;
  const page = filterObject.page;
  const location = filterObject.location;
  const alcohol = filterObject.alcohol;
  const smoking = filterObject.smoking;
  const delivery = filterObject.delivery;
  const type = filterObject.type;
  let response;
  const url = '?searchText=' + searchText + '&location=' + location
    + '&alcohol=' + alcohol + '&smoking=' + smoking + '&delivery=' + delivery + '&type=' + type;
  yield put({ type: SET_FILTER_OBJECT, payload: url });
  yield put({ type: SEARCH_FLAG, payload: true });
  try {
    yield put({ type: SEARCH_LOADING, payload: true });
    response = yield call(axios.get, getRoute('filteredRestaurants') + url + '&page=' + page);
    yield put({ type: CLEAR_SEARCH, payload: false });
    yield put({ type: ADD_RESTAURANTS, payload: response.data.restaurant });
    yield put({ type: SEARCH_LOADING, payload: false });
  } catch (error) {
    yield put({ type: SEARCH_LOADING, payload: false });
    yield alert('Please check your internet connection and try again');
  }
}
/**
 * Used to search for restaurants by a given location and sevices.
 *
 * @generator
 */
function* filterRestaurantsScroll() {
  const page = yield select(getPageNunmber);
  const url = yield select(getFilteredObject);
  let response;
  try {
    yield put({ type: SEARCH_LOADING, payload: true });
    response = yield call(axios.get, getRoute('filteredRestaurants') + url + '&page=' + page);
    yield put({ type: ADD_RESTAURANTS, payload: response.data.restaurant });
    yield put({ type: SEARCH_LOADING, payload: false });
    const restaurants = yield select(getRestaurants);
    yield put({ type: STORE_TEMP, payload: restaurants });
  } catch (error) {
    yield put({ type: SEARCH_LOADING, payload: false });
    yield alert('Please check your internet connection and try again');
  }
}
/**
 * Used to search for restaurants by a given location and sevices.
 *
 * @generator
 */
function* categorizeRestaurants(action) {
  const category = yield action.payload;

  const tempRestaurants = yield select(getTempRestaurants);
  let result = tempRestaurants;
  // categorization function
  try {
    yield put({ type: SEARCH_LOADING, payload: true });
    yield put({ type: CLEAR_SEARCH, payload: false });
    //Used to specify which category was selected
    switch (category) {
      case 10:
        //filter result based on handicap service availability 
        yield result = tempRestaurants.filter(item => item.handicap === 1);
        yield put({ type: CLEAR_SEARCH, payload: false });
        yield put({ type: ADD_RESTAURANTS, payload: result });
        yield put({ type: SEARCH_LOADING, payload: false });
        break;
      case 11:
        //rating categorization
        yield result = tempRestaurants.sort(function (obj1, obj2) {
          return obj2.rating - obj1.rating;
        });
        yield put({ type: CLEAR_SEARCH, payload: false });
        yield put({ type: ADD_RESTAURANTS, payload: result });
        yield put({ type: SEARCH_LOADING, payload: false });
        break;
      case 12:
        //filter best ten results
        yield result = tempRestaurants.sort(function (obj1, obj2) {
          return obj2.visits - obj1.visits;
        });
        yield put({ type: CLEAR_SEARCH, payload: false });
        yield put({ type: ADD_RESTAURANTS, payload: result });
        yield put({ type: SEARCH_LOADING, payload: false });
        break;
      case 13:
        //filter result based on bein sport service availability 
        yield result = tempRestaurants.filter(item => item.beInSport === 1);
        yield put({ type: CLEAR_SEARCH, payload: false });
        yield put({ type: ADD_RESTAURANTS, payload: result });
        yield put({ type: SEARCH_LOADING, payload: false });
        break;
      case 14:
        //filter result based on open spaces service availability 
        yield result = tempRestaurants.filter(item => item.open_set_spaces === 1);
        yield put({ type: CLEAR_SEARCH, payload: false });
        yield put({ type: ADD_RESTAURANTS, payload: result });
        yield put({ type: SEARCH_LOADING, payload: false });
        break;
      case 15:
        //filter opend restaurants  
        yield result = tempRestaurants.filter(item => item.isOpen === 1);
        yield put({ type: CLEAR_SEARCH, payload: false });
        yield put({ type: ADD_RESTAURANTS, payload: result });
        yield put({ type: SEARCH_LOADING, payload: false });
        break;
      default: return tempRestaurants;
    }
  } catch (error) {
    yield put({ type: SEARCH_LOADING, payload: false });
    yield put({ type: CLEAR_SEARCH, payload: false });
    yield put({ type: ADD_RESTAURANTS, payload: tempRestaurants });
  }
}
/**
 * Used to search for restaurants by a given location and sevices.
 *
 * @generator
 */
function* onlineSearch(action) {
  yield put({ type: SEARCH_LOADING, payload: true });
  const location = yield action.payload.location;
  const type = yield action.payload.type;
  const isConnected = yield call(NetInfo.isConnected.fetch);
  let response;
  //generate cashing key
  const url = '?type=' + type + '&location=' + location;
  const key = yield getRoute('onlineSearch') + url;
  const cashedData = yield Cashing.getCashedData(key);
  yield put({ type: SEARCH_FLAG, payload: false });
  if (isConnected) {
    try {
      response = yield call(axios.get, getRoute('onlineSearch') + url);
      yield put({ type: CLEAR_SEARCH, payload: false });
      yield put({ type: ADD_RESTAURANTS, payload: response.data.restaurant });
      yield put({ type: SEARCH_LOADING, payload: false });
      yield Cashing.casheData(key, response.data.restaurant);
    } catch (error) {
      //Get cashed data from the database
      yield alert('Please check your internet connection and try again');
      yield put({ type: SEARCH_LOADING, payload: false });
    }
  } else if (cashedData) {
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}
/**
 * Used to search for restaurants by a given location and sevices.
 *
 * @generator
 */
function* getRelatedDishes(action) {
  yield put({ type: SEARCH_LOADING, payload: true });
  const id = yield action.payload;
  let response;
  //generate cashing key
  const url = '?id=' + id;
  try {
    response = yield call(axios.get, getRoute('relatedDishes') + url);
    yield put({ type: GET_RELATED_DISH, payload: response.data.related });
    yield put({ type: SEARCH_LOADING, payload: false });
  } catch (error) {
    //Get cashed data from the database
    yield alert('Please check your internet connection and try again');
    yield put({ type: SEARCH_LOADING, payload: false });
  }
}


/**
 * Used for making Api requests
 * 
 * @generator
 * @yields {takeEvery} dispatch searchForDish function.
 * @yields {takeEvery} dispatch searchForRestaurant function. 
 * @yields {takeLatest} dispatch getFeaturedRestaurants function. 
 * @yields {takeLatest} dispatch searchForRestaurantByService function. 
 */
export function* searchSaga() {
  yield takeEvery(DISH_SEARCH, searchForDish);
  yield takeEvery(RESTAURANT_SEARCH, searchForRestaurant);
  yield takeLatest(FEATURED_RESTAURANTS, getFeaturedRestaurants);
  yield takeLatest(GET_LOCATIONS, getRestaurantsLocations);
  yield takeLatest(GET_EVENTS, getEvents);
  yield takeLatest(GET_KITCHEN_TYPES, getKitchenTypes);
  yield takeLatest(SEARCH_BY_SERVICE, searchForRestaurantByService);
  yield takeEvery(GET_FILTERED_RESTAURANTS, filterRestaurants);
  yield takeEvery(GET_FILTERED_RESTAURANTS_SCROLL, filterRestaurantsScroll);
  yield takeLatest(RESTAURANTS_CATEGORIZATION, categorizeRestaurants);
  yield takeLatest(FILTER_FEATURED_RESTAURANTS, filterFeaturedRestaurants);
  yield takeLatest(ONLINE_SEARCH, onlineSearch);
  yield takeLatest(RELATED_DISH, getRelatedDishes);
}
