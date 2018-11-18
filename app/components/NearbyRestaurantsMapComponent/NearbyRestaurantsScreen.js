import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { NearbyRestaurantsMapScreen } from './index';
/**
 * Defines NearbyRestaurantsScreen class.
 * 
 * @class NearbyRestaurantsScreen
 * @extends {Component}
 */
class NearbyRestaurantsScreen extends Component {
  /**
   * Used to render the restaurant details screen component.
   * 
   * @returns {ReactElement} NearbyRestaurantsScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <NearbyRestaurantsMapScreen />
      </MenuHeader>

    );
  }
}
export default connect(null)(NearbyRestaurantsScreen);
