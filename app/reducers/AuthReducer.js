import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_SUCCESS, 
  AUTH_FAILURE,
  AUTH_LOADING,
  CLEAR_MESSAGES,
  USER_INFO,
  NETWORK_INFO,
  STORE_LATEST_OFFERS_COUNT,
  STORE_NEARBY_RESTAURANTS_COUNT,
  DYNAMIC_BACKGROUND,
  NOTIFICATIONS_STATE
} from './../constants/ActionTypes';   

const initialState = { 
  email: '',
  password: '',
  token: '',
  notifications: false,
  error: '',
  userInfo: '',
  networkAvailability: false,
  offersCount: '',
  nearByLocationsCount: '',
  background: ''
};
/**
 * @returns {object} Authentication state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_STATE:
      return { ...state, notifications: action.payload };
    case DYNAMIC_BACKGROUND: 
      return { ...state, background: action.payload };
    case STORE_NEARBY_RESTAURANTS_COUNT:
      return { ...state, nearByLocationsCount: action.payload };
    case STORE_LATEST_OFFERS_COUNT: 
      return { ...state, offersCount: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case AUTH_SUCCESS:
      return { ...state, token: action.payload };
    case AUTH_FAILURE:
      return { ...state, error: action.payload };
    case AUTH_LOADING:
      return { ...state, loading: action.payload };
    case CLEAR_MESSAGES:
      return { 
        ...state,
        loading: false,
        error: null
      };
    case USER_INFO: 
      return { ...state, userInfo: action.payload };
    case NETWORK_INFO:
    return { ...state, networkInfo: action.payload }; 
    default:
      return state;
  }
};
