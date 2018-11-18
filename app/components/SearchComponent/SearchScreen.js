import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import RestaurantList from './RestaurantList';
import 
  MenuHeader 
from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import 
  FullFilterHeaderScreen 
from './../../utils/Componenets/FullFilterHeaderComponent/FullFilterHeaderScreen';
/**
 * Defines the search screen Component.
 * 
 * @class SearchScreen
 * @extends {SearchScreen}
 */
class SearchScreen extends Component {
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
        <FullFilterHeaderScreen
          searchText={this.props.data}
        >
          <RestaurantList text={this.props.data} />
        </FullFilterHeaderScreen>
      </MenuHeader>
    );
  }
}
export default SearchScreen;
