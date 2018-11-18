import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { OffersList } from './index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';

/**
 * Defines offer screen component
 * 
 * @class OffersListScreen
 * @extends {Component}
 */
class OffersListScreen extends Component {
  /**
   * Used to render favorite offers screen component
   * 
   * @returns {ReactElement} OffersListScreen component
   */
  render() {
    return (
      <MenuHeader
        secondIconName='shopping-cart' 
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
      >
         <OffersList offerTitle={this.props.offerTitle} />
      </MenuHeader>
    );
  }
}
export default OffersListScreen;
