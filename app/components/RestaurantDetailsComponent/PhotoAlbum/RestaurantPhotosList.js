import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import RestaurantPhotoItem from './RestaurantPhotoItem';
import Styles from './../Styles';
/**
 * Defines RestaurantPhotosList component
 * 
 * @class RestaurantPhotosList
 * @extends {Component}
 */
class RestaurantPhotosList extends Component {
  /**
   * Used to render the RestaurantPhotoItem component.
   * 
   * @returns {ReactElement} RestaurantPhotoItem component
   */
  renderFlatListItem(item) {
    return (
      <RestaurantPhotoItem
        item={item}
      />
    );
  }
  /**
   * Used to render the RestaurantPhotoList component.
   * 
   * @param {object[]} offers 
   * 
   * @returns {ReactElement} RestaurantPhotoItem component
   */
  rendersScreen(offers) {
    return (
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => this.renderFlatListItem(item)}
      />
    );
  }
  /**
   * Used to render RestaurantPhotoItem component
   * 
   * @returns {ReactElement} RestaurantPhotoItem component
   */
  render() {
    if (this.props.restaurant) {
      if (this.props.restaurant.photo) {
        return (
          <View style={Styles.offersContainer}>
            <Text style={Styles.restaurantName}>عدد الصور في الالبوم </Text>
            <Text style={Styles.restaurantName}>{this.props.restaurant.photo.length}</Text>
            <View style={Styles.sublineDivider} />
            {this.rendersScreen(this.props.restaurant.photo)}
          </View>
        );
      }
    }
    return <View />;
  }
}
/**
 * Used to pass the store state to the RestaurantPhotosList class.
 * 
 * @param {object} state The redux store state.
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    restaurant: state.SearchedData.restaurantItem.restaurant,
  };
};
export default connect(mapStateToProps)(RestaurantPhotosList);
