import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { RestaurantMenuDetails } from './index';
import { getMenu } from './../../actions/index';
/**
 * Defines RestaurantMenuScreen class.
 * 
 * @class RestaurantMenuScreen
 * @extends {Component}
 */
class RestaurantMenuScreen extends Component {

  /**
   * Called when the component is about to mount
   * Used to call the restaurantDetails action 
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.getMenu(this.props.id);
  }
  /**
   * Used to render the restaurant menu screen component.
   * 
   * @returns {ReactElement} RestaurantMenuScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <RestaurantMenuDetails />
      </MenuHeader>

    );
  }
}
export default connect(null, { getMenu })(RestaurantMenuScreen);
