import {
  SELECTED_MENU_ITEM,
  SELECTED_TAB,
  TOGGEL_LOCATIONS_MENU
} from './../constants/ActionTypes';   
/**
 * @returns {object} SelectedMenuId state
 */
const initialState = { 
  selectedTab: '',
  selectedMenuItem: '',
  locationsMenu: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_MENU_ITEM:
      return { ...state, selectedMenuItem: action.payload };
    case SELECTED_TAB:
      return { ...state, selectedTab: action.payload };
    case TOGGEL_LOCATIONS_MENU:
      return { ...state, locationsMenu: action.payload };
    default:
      return state;
  }
};
