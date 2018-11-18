import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { OffersInformation } from './index';
/**
 * Defines OffershDetailsScreen class.
 * 
 * @class OffershDetailsScreen
 * @extends {Component}
 */
class OffershDetailsScreen extends Component {
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
        <OffersInformation item={this.props.item} />
      </MenuHeader>
    );
  }
}
export default OffershDetailsScreen;
