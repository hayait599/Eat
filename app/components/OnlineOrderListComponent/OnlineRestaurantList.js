import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getRoute } from './../../services/Api';
import {
  clearSearchResult
} from './../../actions/index';
import RestaurantItem from './../../utils/Componenets/RestaurantItem/RestaurantItem';
import Styles from './Styles';
/**
* Defines the OnlineRestaurantList Component.
* 
* @class RestaurantList
* @extends {SearchScreen}
*/
class OnlineRestaurantList extends Component {
  /**
   * Called when the component is about to unmount 
   * Used to clear the search resault.
   * 
   * @returns Void
   */
  componentWillUnmount() {
    this.props.clearSearchResult();
  }

  /** 
   * Used to remove duplicated objects. 
   *  
   * @param {object[]} 
   * @returns {object[]} Unique Array 
   */
  removeDuplication(arr) {
    const uniqueArray = arr.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });
    return uniqueArray;
  }
  /**
   * Used to render the restaurant list item component.
   * 
   * @returns {ReactElement} RestaurantItem component
   */
  renderFlatListItem(item) {
    const id = item.id;
    return (
      <RestaurantItem
        color='#575756'
        iconColor='#ffffff'
        backgroundColor='#ffffff'
        onlineOrder
        item={item}
        onPress={() => Actions.restaurantDetailsScreen({ id })}
      />
    );
  }
  /**
   * Used to render the loading icon.
   * 
   * @returns {ActivityIndicator}
   */
  renderLoading() {
    if (this.props.loading) {
      return (
        <View style={Styles.loadingIcon}>
          <ActivityIndicator size='small' color='#000000' />
        </View>
      );
    }
    return (
      <View style={Styles.loadingIcon} />
    );
  }
  /**
   * Used to render the restaurant list component.
   * 
   * @returns {ReactElement} RestaurantList component
   */
  render() {
    const restaurants = this.removeDuplication(this.props.restaurants);
    return (
      <View style={Styles.content}>
        <View style={Styles.container}>
          <View style={Styles.restaurantsList}>
            <FlatList
              data={restaurants}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => this.renderFlatListItem(item)}
            />
            {this.renderLoading()}
          </View>
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the OnlineRestaurantList class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    restaurants: state.SearchedData.restaurants,
    loading: state.SearchedData.loading,
    AdvertisementImages: state.AdvertisementImages.searchScreen
  };
};
export default connect(mapStateToProps, {
  clearSearchResult
})(OnlineRestaurantList); 
