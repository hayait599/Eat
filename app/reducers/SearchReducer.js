import {
  SEARCH_TEXT_CHANGED
} from './../constants/ActionTypes';   
/**
 * @returns {object} searchedText state
 */
export default (state = '', action) => {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
      return action.payload;
    default:
      return state;
  }
};
