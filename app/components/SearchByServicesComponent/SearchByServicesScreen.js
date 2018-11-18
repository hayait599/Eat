import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';
import
  MenuHeader
from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import FilterHeader from './../../utils/Componenets/FilterHeaderComponent/FilterHeader';
import {
  getLocations
} from './../../actions/index';
/**
 * Defines the search by services screen Component.
 * 
 * @class SearchByServicesScreen
 * @extends {SearchScreen}
 */
class SearchByServicesScreen extends Component {
  /**
   * Used to render the search screen component.
   * 
   * @returns {ReactElement} SearchScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <FilterHeader
          firstOption={'المنطقة'}
          secondOption={'الخدمات'}
        >
          <RestaurantList />
        </FilterHeader>
      </MenuHeader>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object[]} state.SearchedData.locations The returned access token.
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    locations: state.SearchedData.locations
  };
};
export default connect(mapStateToProps, {
  getLocations
})(SearchByServicesScreen);
