import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RestaurantItem from './../../utils/Componenets/RestaurantItem/RestaurantItem';
import {
  Styles
} from './Styles';
/**
 * Defines FeaturedSection class.
 * 
 * @class FeaturedSection
 * @extends {Component}
 */
class FeaturedSection extends Component {
  /**
   * Used to render the featured  item.
   * 
   * @returns {ReactElement} FeaturedItem component.
   */
  renderFlatListItem(item) {
    const id = item.restaurant.id;
    return (
      <RestaurantItem
        backgroundColor='#DADADA'
        color='#000000'
        iconColor='#DADADA'
        item={item.restaurant}
        onPress={() => Actions.restaurantDetailsScreen({ id })}
      />
    );
  }
  /**
   * Used to render the restaurant menu list item.
   * 
   * @returns {ReactElement} ListItem component
   */
  render() {
    if (this.props.item.restaurants.length > 0) {
      return (
        <View style={Styles.itemSectionContainer}>
          <Text style={Styles.itemSectionText}>{this.props.item.location}</Text>
          <View style={Styles.lineDivider} />
          <FlatList
            data={this.props.item.restaurants}
            keyExtractor={(item) => item.restaurant.id}
            renderItem={({ item }) => this.renderFlatListItem(item)}
          />
        </View>
      );
    }
    return <View />;
  }
}
export default connect(null)(FeaturedSection);
