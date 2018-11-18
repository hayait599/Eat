import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
} from 'react-native';
import Styles from './Styles';
import Offers from './../../repository/Offers';
import { FavoriteOffersList } from './index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';

/**
 * Defines favorite offer screen component
 * 
 * @class FavoriteOffersListScreen
 * @extends {Component}
 */
class FavoriteOffersScreen extends Component {
 /**
  * @constructor
  * @param {object} props Used for passing data to the favorite 
  *   offer component
  */
  constructor(props) {
    super(props);
    /**
     * @type {object} 
     */
    this.state = {
      offers: Offers.getAll(),
    };
  }
  /**
   * Used to render favorite offers screen component
   * 
   * @returns {ReactElement} FavoriteOffersListScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <View style={Styles.container}>
          <FavoriteOffersList offers={this.state.offers} />
        </View>
      </MenuHeader>
    );
  }
}
export default FavoriteOffersScreen;
