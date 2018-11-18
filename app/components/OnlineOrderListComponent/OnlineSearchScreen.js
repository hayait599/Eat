import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import OnlineRestaurantList from './OnlineRestaurantList';
import
  MenuHeader
from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
/**
 * Defines the OnlineSearchScreen Component.
 * 
 * @class OnlineSearchScreen
 * @extends {SearchScreen}
 */
class OnlineSearchScreen extends Component {
  /**
   * Used to render the OnlineSearchScreen component.
   * 
   * @returns {ReactElement} OnlineSearchScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        firstIconName='search'
      >
        <OnlineRestaurantList />
      </MenuHeader>
    );
  }
}
export default OnlineSearchScreen;
