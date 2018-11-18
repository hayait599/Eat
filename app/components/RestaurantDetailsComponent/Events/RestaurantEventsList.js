import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import RestaurantEventsItem from './RestaurantEventsItem';
import Styles from './../Styles';
/**
 * Defines RestaurantEventsList component
 * 
 * @class RestaurantEventsList
 * @extends {Component}
 */
class RestaurantEventsList extends Component {
  /**
   * Used to render the RestaurantEventsItem item component.
   * 
   * @returns {ReactElement} RestaurantEventsItem component
   */
  renderFlatListItem(item) {
    return (
      <RestaurantEventsItem
        item={item}
      />
    );
  }
  /**
   * Used to render the events list
   * 
   * @param {object[]} events 
   * 
   * @returns {ReactElement}
   */
  rendersScreen(events) {
    return (
      <FlatList
        data={events}
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
      if (this.props.restaurant.events.original[1].$coming) {
        return (
          <View style={Styles.offersContainer}>
            <Text style={Styles.restaurantName}>فعاليات بالانتظار</Text>
            <Text style={Styles.restaurantName}>Upcomming Events</Text>
            {this.rendersScreen(this.props.restaurant.events.original[1].$coming)}
            <Text style={Styles.restaurantName}>فعاليات سابقة</Text>
            <Text style={Styles.restaurantName}>Expired Events</Text>
            {this.rendersScreen(this.props.restaurant.events.original[0].$past)}
          </View>
        );
      }
    }
    return <View />;
  }
}
/**
 * Used to pass the store state to the RestaurantEventsList class.
 * 
 * @param {object} state The redux store state.
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    restaurant: state.SearchedData.restaurantItem,
  };
};
export default connect(mapStateToProps)(RestaurantEventsList);
