import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
/**
 * Defines MenuList class.
 * 
 * @class MenuList
 * @extends {Component}
 */
class MenuList extends Component {
  /**
   * Used to render the menu list item component.
   * 
   * @returns {ReactElement} renderFlatListItem component
   */
  renderFlatListItem(item) {
    return (
      <ListItem
        item={item}
      />
    );
  }
  /**
   * Used to render the menu list component.
   * 
   * @returns {ReactElement} MenuList component
   */
  render() {
    return (
      <FlatList 
        data={this.props.restaurantMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => this.renderFlatListItem(item)}
      />
    );
  }
}
/**
 * Used to pass the store state to the MenuList class.
 * 
 * @param {object} state The redux store state.
 *   
 * @returns {Object[]} props
 */
const mapStateToProps = state => {
  return {
    selectedMenuId: state.SelectedId.selectedMenuItem,
    restaurantMenu: state.RestaurantData.restaurantMenu.restaurantMenu
  };
};
export default connect(mapStateToProps)(MenuList);
