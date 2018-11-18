import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { RestaurantDetails } from './index';
import { restaurantDetails } from './../../actions/index';
/**
 * Defines RestaurantDetailsScreen class.
 * 
 * @class RestaurantDetailsScreen
 * @extends {Component}
 */
class RestaurantDetailsScreen extends Component {

  /**
   * Called when the component is about to mount
   * Used to call the restaurantDetails action 
   * 
   */
  componentWillMount() {
    this.props.restaurantDetails(this.props.id);
  }
  /**
   * Used to render the restaurant details screen component.
   * 
   * @returns {ReactElement} RestaurantDetailsScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <RestaurantDetails />
      </MenuHeader>

    );
  }
}
export default connect(null, { restaurantDetails })(RestaurantDetailsScreen);
