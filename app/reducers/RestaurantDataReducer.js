import {
  GET_FAVORITE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  REMOVE_ALL_FAVORITE,
  GET_FAVORITE_OFFERS,
  ADD_FAVORITE_OFFERS,
  REMOVE_FAVORITE_OFFERS,
  REMOVE_ALL_FAVORITE_OFFERS,
  ADD_RATED,
  SEARCH_FLAG,
  SET_PAGE_NUMBER,
  SET_FILTER_OBJECT,
  GET_RELATED_DISH,
  STORE_TEMP,
  STORE_MENU
} from './../constants/ActionTypes';

const initialState = {
  restaurantsId: [],
  offersId: [],
  ratedRestaurants: [],
  restaurantMenu: {},
  filteredObject: {},
  searchFlag: false,
  pageNumber: 1,
  relatedDishes: [],
  tempRestaurants: []
};
/**
 * @returns {object} RestaurantData state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_MENU:
      return { ...state, restaurantMenu: action.payload };
    case STORE_TEMP:
      return { ...state, tempRestaurants: action.payload };
    case GET_RELATED_DISH: 
      return { ...state, relatedDishes: action.payload };
    case SET_FILTER_OBJECT:
      return { ...state, filteredObject: action.payload };
    case REMOVE_ALL_FAVORITE:
      return {
        ...state,
        restaurantsId: action.payload
      };
    case GET_FAVORITE:
      return { ...state, restaurantsId: action.payload };
    case ADD_FAVORITE:
      return {
        ...state,
        restaurantsId: [...state.restaurantsId, action.payload]
      };
    case REMOVE_FAVORITE: {
      const itemId = action.payload;
      const updatedItems = state.restaurantsId;
      const updatedItemsId = updatedItems.filter(item => item !== itemId);
      return {
        ...state,
        restaurantsId: [...updatedItemsId],
        ratedRestaurants: state.ratedRestaurants
      };
    }
    case REMOVE_ALL_FAVORITE_OFFERS:
      return {
        ...state,
        offersId: action.payload
      };
    case GET_FAVORITE_OFFERS:
      return { ...state, offersId: action.payload };
    case ADD_FAVORITE_OFFERS:
      return {
        ...state,
        offersId: [...state.offersId, action.payload]
      };
    case REMOVE_FAVORITE_OFFERS: {
      const itemId = action.payload;
      const updatedItems = state.offersId;
      const updatedItemsId = updatedItems.filter(item => item !== itemId);
      return {
        ...state,
        offersId: [...updatedItemsId]
      };
    }
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    case SEARCH_FLAG:
      return { ...state, searchFlag: action.payload };
    case ADD_RATED: {
      return {
        ...state,
        restaurantsId: state.restaurantsId,
        ratedRestaurants: [...state.ratedRestaurants, action.payload]
      };
    }
    default:
      return state;
  }
};
