import {
  STORE_NEARBY_RESTAURANTS,
  CLEAR_NEAR_BY_LOCATION
} from './../constants/ActionTypes';   

const initialState = { 
  nearbyRestaurants: []
};
/**
 * @returns {object} NearbyLocations state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_NEARBY_RESTAURANTS:
      return { ...state, nearbyRestaurants: action.payload };
    case CLEAR_NEAR_BY_LOCATION:
      return { ...state, nearbyRestaurants: [] };
    default:
      return state;
  }
};
