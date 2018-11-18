import {
  ADVERTISEMENT_IMAGES
} from './../constants/ActionTypes';   

const initialState = { 
  homeScreen: '',
  loginScreen: '',
  searchScreen: ''
};
/**
 * @returns {object} AdvertisementImages state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADVERTISEMENT_IMAGES: {
      const advertisement = action.payload;
      const homeScreen = advertisement.filter(item => item.screen_number === 2);
      const searchScreen = advertisement.filter(item => item.screen_number === 4);
      const loginScreen = advertisement.filter(item => item.screen_number === 6);
      return { 
        ...state,
        loginScreen: loginScreen[0],
        homeScreen: homeScreen[0],
        searchScreen: searchScreen[0]
      };
    }
    default:
      return state;
  }
};
