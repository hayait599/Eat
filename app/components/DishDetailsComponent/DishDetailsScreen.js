import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { DishInformation } from './index';
import { dishDetails, getRelatedDishes } from './../../actions/index';
/**
 * Defines DishDetailsScreen class.
 * 
 * @class DishDetailsScreen
 * @extends {Component}
 */
class DishDetailsScreen extends Component {
  /**
   * Called when the component is about to mount
   * Used to call the DishDetailsScreen action 
   * 
   * @return void
   */
  componentWillMount() {
    this.props.dishDetails(this.props.dishId);
    this.props.getRelatedDishes(this.props.dishId);
  }
  /**
   * Used to render the dish details screen component.
   * 
   * @returns {ReactElement} DishDetailsScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <DishInformation />
      </MenuHeader>
    );
  }
}
export default connect(null, { dishDetails, getRelatedDishes })(DishDetailsScreen);
