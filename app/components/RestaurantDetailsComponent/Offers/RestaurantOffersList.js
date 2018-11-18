import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RestaurantOfferItem from './RestaurantOfferItem';
import Styles from './../Styles';
/**
 * Defines RestaurantOffersList component
 * 
 * @class RestaurantOffersList
 * @extends {Component}
 */
class RestaurantOffersList extends Component {
  /**
   * Used to render the offers list item component.
   * 
   * @returns {ReactElement} OfferItem component
   */
  renderFlatListItem(item) {
    return (
      <RestaurantOfferItem
        item={item}
        onPress={() => Actions.offershDetailsScreen({ item })}
      />
    );
  }
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
   * Used to render favorite offers screen component
   * 
   * @returns {ReactElement} OffersListScreen component
   */
  render() {
    if (this.props.restaurant) {
      if (this.props.restaurant.offers) {
        return (
          <View style={Styles.offersContainer}>
            <Text style={Styles.restaurantName}>عدد الاعلانات المنشورة</Text>
            <Text style={Styles.restaurantName}>{this.props.restaurant.offers.length}</Text>
            <View style={Styles.sublineDivider} />
            {this.rendersScreen(this.props.restaurant.offers)}
          </View>
        );
      }
    }
    return <View />;
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    restaurant: state.SearchedData.restaurantItem,
  };
};
export default connect(mapStateToProps)(RestaurantOffersList);
