import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import DishesList from './DishesList';
import 
  MenuHeader 
from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
/**
 * Defines the search screen Component.
 * 
 * @class SearchDishScreen
 * @extends {SearchDishScreen}
 */
class SearchDishScreen extends Component {
  /**
   * Used to render the search screen component.
   * 
   * @returns {ReactElement} SearchDishScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <DishesList text={this.props.data} />
      </MenuHeader>
    );
  }
}
export default SearchDishScreen;
