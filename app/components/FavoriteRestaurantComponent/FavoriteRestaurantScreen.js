import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Restaurant from './../../repository/Restaurant';
import { RestaurantsList } from './index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';

/**
 * Defines the favorite restaurant screen class component
 * 
 * @class FavoriteRestaurantScreen
 * @extends {Component}
 */
class FavoriteRestaurantScreen extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the favorite 
   *   restaurant component
   */
  constructor(props) {
    super(props);
    /**
     * @type {object} 
     * @property {object[]} restaurants Favorite restaurants  
     */
    this.state = {
      restaurants: Restaurant.getAll()
    };
  }
  /**
   * Used to render the favorite restaurant screen component
   * 
   * @returns {ReactElement} FavoriteRestaurantScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <View style={Styles.container}>
          <RestaurantsList
            restaurantsList={this.state.restaurants}
          />
        </View>
      </MenuHeader>
    );
  }
}
export { FavoriteRestaurantScreen };
