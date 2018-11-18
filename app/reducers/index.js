import { combineReducers } from 'redux';
import SelectionReducers from './SelectionReducers';
import AuthReducer from './AuthReducer';
import SearchReducer from './SearchReducer';
import CartReducer from './CartReducer';
import SearchedDataReducer from './SearchedDataReducer';
import RestaurantDataReducer from './RestaurantDataReducer';
import NearbyLocationsReducer from './NearbyLocationsReducer';
import AdvertisementImagesReducer from './AdvertisementImagesReducer';

/**
 * @returns {object} Store state
 */
export default combineReducers({
  SelectedId: SelectionReducers,
  Authentication: AuthReducer,
  searchedText: SearchReducer,
  Cart: CartReducer,
  SearchedData: SearchedDataReducer,
  RestaurantData: RestaurantDataReducer,
  NearbyLocations: NearbyLocationsReducer,
  AdvertisementImages: AdvertisementImagesReducer
});

