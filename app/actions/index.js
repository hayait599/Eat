import {
  USER_LOGIN,
  AUTH_LOADING,
  AUTH_FAILURE,
  FACEBOOK_LOGIN,
  AUTH_SUCCESS,
  BASIC_SETUP,
  SEARCH_TEXT_CHANGED,
  ADD_TO_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_FROM_CART,
  TOTAL_COST,
  DELIVERY_COST,
  SELECTED_MENU_ITEM,
  SELECTED_TAB,
  USER_SIGNUP,
  USER_LOGOUT,
  DISH_SEARCH,
  RESTAURANT_SEARCH,
  RESTAURANT_DETAILS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  GET_FAVORITE,
  NEARBY_RESTAURANTS,
  CLEAR_MESSAGES,
  RESTAURANTS_EVALUATION,
  CLEAR_SEARCH,
  RESTAURANTS_SERVICES_EVALUATION,
  ADD_RATED,
  CLEAR_NEAR_BY_LOCATION,
  DISH_DETAILS,
  FEATURED_RESTAURANTS,
  GET_LOCATIONS,
  SEARCH_BY_SERVICE,
  GET_OFFERS,
  GET_KITCHEN_TYPES,
  GET_EVENTS,
  GET_FILTERED_RESTAURANTS,
  SET_PAGE_NUMBER,
  RESTAURANTS_CATEGORIZATION,
  GET_LATEST_OFFERS,
  GET_FAVORITE_OFFERS,
  ADD_FAVORITE_OFFERS,
  REMOVE_FAVORITE_OFFERS,
  GET_FILTERED_RESTAURANTS_SCROLL,
  TOGGEL_LOCATIONS_MENU,
  FORGOT_PASSWORD,
  FILTER_FEATURED_RESTAURANTS,
  ONLINE_SEARCH,
  RELATED_DISH,
  SEND_ORDER,
  USER_INFO,
  SETTINGS,
  GET_MENU
} from './../constants/ActionTypes';  

/**
 * Used to add an item to the cart state.
 * 
 * @param {Object} item The item to be added to the cart redux state
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const addItemToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: { addedItems: item }
  };
};
/**
 * Used to remove an item from the cart state.
 * 
 * @param {int} itemId The id of the item to be removed from the cart state.
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const removeItemFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { itemId }
  };
};
/**
 * Used to set or reset the order total cost.
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const setTotalCost = () => {
  return {
    type: TOTAL_COST,
  };
};
/**
 * Used to set or reset the delivery total cost.
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const setTotalDeliveryCost = () => {
  return {
    type: DELIVERY_COST,
  };
};
/**
 * Used to increase the ordered quantity of a specific item.
 * 
 * @param {int} itemId The item id 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const addItem = (itemId) => {
  return {
    type: ADD_ITEM,
    payload: { itemId }
  };
};
/**
 * Used to decrease the ordered quantity of a specific item.
 * 
 * @param {int} itemId  The item id 
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    payload: { itemId }
  };
};
/**
 * Used to set the selected menu id state to the selected menu id .
 * 
 * @param {int} menuId The id of the selected menu
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const selectedMenuItem = (menuId) => {
  return {
    type: SELECTED_MENU_ITEM,
    payload: menuId
  };
};
/**
 * Used to set the selected tab id state to the selected tab index.
 * 
 * @param {int} tabId The id of the selected tab
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const selectedTab = (tabId) => {
  return {
    type: SELECTED_TAB,
    payload: tabId
  };
};
/**
 * Used for logging in users using an email and password.
 * 
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const userLogin = ({ email, password }) => {
  return {
    type: USER_LOGIN,
    payload: { email, password }
  };
};
/**
 * Used for registering users
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {string} userName 
 * @param {string} mobile 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const userSignup = ({ email, password, userName, mobile }) => {
  return {
    type: USER_SIGNUP,
    payload: { email, password, userName, mobile } 
  };
};
/**
 * Used for logout
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
/**
 * Used for logging in users using facebook.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const facebookLogin = () => {
  return {
    type: FACEBOOK_LOGIN,
  };
};
/**
 * Used for setting the login loading state.
 * 
 * @param {int} loading 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const authLoading = (loading) => {
  return {
    type: AUTH_LOADING,
    payload: loading
  };
};
/**
 * Used to set the auth errors.
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const authFailed = () => {
  return {
    type: AUTH_FAILURE,
  };
};
/**
 * Used to set the auth success state.
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const authSuccess = () => {
  return {
    type: AUTH_SUCCESS,
  };
};
/**
 * Used for clearing the access token state.
 * 
 * @returns {Reducer} Dispatching the matching reducer
 */
export const clearAceessToken = () => {
  return {
    type: AUTH_SUCCESS,
    payload: ''
  };
};
/**
 * Used for setting up the basic setup.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const setup = (latitude, longitude, radius) => {
  return {
    type: BASIC_SETUP,
    payload: { latitude, longitude, radius }
  };
};
/**
 * Used for setting the searching text state.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const searchText = (text) => {
  return {
    type: SEARCH_TEXT_CHANGED,
    payload: text
  };
};
/**
 * Used for searching in restaurants menus.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const searchForDish = (text, page) => {
  return {
    type: DISH_SEARCH,
    payload: { text, page }
  };
};
/**
 * Used to search for a restaurant by name, location or kitchen type.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const searchForRestaurant = (text, page) => {
  return {
    type: RESTAURANT_SEARCH,
    payload: { text, page }
  };
};
/**
 * Used to search for a restaurant by name, location or kitchen type.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const clearSearchResult = () => {
  return {
    type: CLEAR_SEARCH,
  };
};
/**
 * Used to get restaurant details.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const restaurantDetails = (id) => {
  return {
    type: RESTAURANT_DETAILS,
    payload: id
  };
};
/**
 * Used to add a restaurant as favorite.
 * 
 * @param {int} id The restaurant id.
 * 
 * @returns {Reducer} Dispatching the matching reducer.
 */
export const addFavorite = (id) => {
  return {
    type: ADD_FAVORITE,
    payload: id
  };
};
/**
 * Used to add a restaurant as favorite.
 * 
 * @param {int} id The restaurant id.
 * 
 * @returns {Reducer} Dispatching the matching reducer.
 */
export const addFavoriteOffer = (id) => {
  return {
    type: ADD_FAVORITE_OFFERS,
    payload: id
  };
};
/**
 * Used to remove a restaurant from the favorites list.
 * 
 * @param {int} id The restaurant id.
 * 
 * @returns {Reducer} Dispatching the matching Reducer.
 */
export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  };
};
/**
 * Used to remove an offer from the favorites list.
 * 
 * @param {int} id The offer id.
 * 
 * @returns {Reducer} Dispatching the matching Reducer.
 */
export const removeFavoriteOffer = (id) => {
  return {
    type: REMOVE_FAVORITE_OFFERS,
    payload: id
  };
};
/**
 * Used to set the an offers as favorite.
 * 
 * @param {int} id The offer id.
 * 
 * @returns {Reducer} Dispatching the matching Reducer.
 */
export const getFavoriteOffer = (id) => {
  return {
    type: GET_FAVORITE_OFFERS,
    payload: id
  };
};
/**
 * Used to get the favorite restaurants list.
 * 
 * @param {int} id The restaurant id.
 * 
 * @returns {Reducer} Dispatching the matching Reducer.
 */
export const getFavorite = (id) => {
  return {
    type: GET_FAVORITE,
    payload: id
  };
};
/**
 * Used to get near by restaurants.
 * 
 * @param latitude The user latitude.
 * @param longitude The user longitude.
 * @param radius The selected searching radius.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getNearByLocations = (latitude, longitude, radius) => {
  return {
    type: NEARBY_RESTAURANTS,
    payload: { latitude, longitude, radius }
  };
};
/**
 * Used for clearing error messages.
 * 
 * @returns {Reducer} Dispatching the matching Reducer
 */
export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};
/**
 * Used for restaurants rating request.
 * 
 * @param id The restaurants id.
 * @param evaluationValue The evaluation value.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const storeEvaluation = (id, evaluationValue) => {
  return {
    type: RESTAURANTS_EVALUATION,
    payload: { id, evaluationValue }
  };
};
/**
 * Used for restaurants evaluation requests.
 * 
 * @param id The restaurants id.
 * @param evaluationValue The evaluation value .
 * @param evaluationType The evaluation type.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const storeServicesEvaluation = (id, evaluationValue, evaluationType) => {
  return {
    type: RESTAURANTS_SERVICES_EVALUATION,
    payload: { id, evaluationValue, evaluationType }
  };
};
/**
 * Used for restaurants evaluation requests.
 * 
 * @param id The restaurants id.
 * 
 * @returns {ReduxReducer} Dispatching the matching action
 */
export const addRatedRestaurants = (id) => {
  return {
    type: ADD_RATED,
    payload: id
  };
};

/**
 * Used to clear restaurants state. 
 * 
 * @param id The restaurants id.
 * 
 * @returns {ReduxReducer} Dispatching the matching action
 */
export const clearNearByLocation = () => {
  return {
    type: CLEAR_NEAR_BY_LOCATION,
  };
};
/**
 * Used to get dish details state. 
 * 
 * @param id The restaurants id.
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const dishDetails = (id) => {
  return {
    type: DISH_DETAILS,
    payload: id
  };
};
/**
 * Used to get featured restaurant  state. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const featuredRestaurants = () => {
  return {
    type: FEATURED_RESTAURANTS,
  };
};
/**
 * Used to get all available restaurants locations state. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getLocations = () => {
  return {
    type: GET_LOCATIONS,
  };
};
/**
 * Used to get all available restaurants locations state. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getKitchenTypes = () => {
  return {
    type: GET_KITCHEN_TYPES,
  };
};
/**
 * Used to search for restaurants by location and service. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const searchByServiceAndLocation = (locationId, services) => {
  return {
    type: SEARCH_BY_SERVICE,
    payload: { locationId, services }
  };
};
/**
 * Used to get all offers. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getOffers = () => {
  return {
    type: GET_OFFERS,
  };
};
/**
 * Used to get all Event. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getEvents = () => {
  return {
    type: GET_EVENTS,
  };
};
/** 
 * Used to filter search results. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getFilteredRestaurants = (filterObject) => {
  return {
    type: GET_FILTERED_RESTAURANTS,
    payload: filterObject
  };
};
/** 
 * Used to filter search results. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getFilteredRestaurantsScroll = () => {
  return {
    type: GET_FILTERED_RESTAURANTS_SCROLL
  };
};
/**
 * Used to set the search page number. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const setSearchPageNumber = (page) => {
  return {
    type: SET_PAGE_NUMBER,
    payload: page
  };
};
/**
 * Used to categorize restaurants. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const restaurantsCategorization = (category) => {
  return {
    type: RESTAURANTS_CATEGORIZATION,
    payload: category
  };
};
/**
 * Used to get latest offers. 
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getlLatestOffers = () => {
  return {
    type: GET_LATEST_OFFERS,
  };
};
/**
 * Used to reset password. 
 * 
 * @params {string} email
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const forgotPassword = (email) => {
  return {
    type: FORGOT_PASSWORD,
    payload: email
  };
};
/**
 * Used to set the menu state, open or closed. 
 * 
 * @params {string} flag
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const setLocationsMenuState = (flag) => {
  return {
    type: TOGGEL_LOCATIONS_MENU,
    payload: flag
  };
};
/**
 * Used to filter featured restaurants. 
 * 
 * @params {string} location
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const filterFeaturedRestaurants = (location) => {
  return {
    type: FILTER_FEATURED_RESTAURANTS,
    payload: location
  };
};
/**
 * Used to for online search request. 
 * 
 * @params {int} location
 * @params {int} type
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const onlineSearch = (location, type) => {
  return {
    type: ONLINE_SEARCH,
    payload: { location, type }
  };
};
/**
 * Used to get relate dishes. 
 * 
 * @params {int} id
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getRelatedDishes = (id) => {
  return {
    type: RELATED_DISH,
    payload: id
  };
};
/**
 * Used to set the user name state. 
 * 
 * @params {string} name
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const setUserName = (name) => {
  return {
    type: USER_INFO,
    payload: name
  };
};
/**
 * Used to send an order. 
 * 
 * @params {string} order
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const sendOrder = (order) => {
  return {
    type: SEND_ORDER,
    payload: order
  };
};
/**
 * Used to set the notifications settings. 
 * 
 * @params {boolean} option
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const settingsOption = (option) => {
  return {
    type: SETTINGS,
    payload: option
  };
};
/**
 * Used to get the restaurant menu. 
 * 
 * @params {int} id
 * 
 * @returns {Saga} Dispatching the matching saga
 */
export const getMenu = (id) => {
  return {
    type: GET_MENU,
    payload: id
  };
};
