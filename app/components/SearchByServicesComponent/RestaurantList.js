import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  ActivityIndicator,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getRoute } from './../../services/Api';
import {
  searchForRestaurant,
  clearSearchResult
} from './../../actions/index';
import RestaurantItem from './../../utils/Componenets/RestaurantItem/RestaurantItem';
import Styles from './Styles';

const events = require('./../../images/SearchScreenIcon.png');
/**
* Defines the restaurant list Component.
* 
* @class RestaurantList
* @extends {SearchScreen}
*/
class RestaurantList extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the RestaurantList component.
   * 
   */
  constructor(props) {
    super(props);
    this.state = {
      isInside: true
    };
  }
  /**
   * Called when the component is about to mount 
   * Used to make a search request
   * 
   * @return void
   */
  componentWillMount() {
    this.props.clearSearchResult();
  }
  /**
   * Called when the component is about to unmount 
   * Used to clear the search resault.
   * 
   * @return void
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
        backgroundColor='#ffffff'
        color='#000000'
        iconColor='#ffffff'
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
        <ActivityIndicator size='small' color='#e30613' />
      );
    }
  }
  /**
   * Used to render the restaurant list component.
   * 
   * @returns {ReactElement} RestaurantList component
   */
  render() {
    const restaurants = this.removeDuplication(this.props.restaurants);
    if (this.props.loading) {
      return (
        <View style={Styles.content}>
          <View style={Styles.container}>
            <View style={Styles.spinnerStyle} >
              <ActivityIndicator size='large' color='#000000' />
            </View>
          </View>
        </View>
      );
    } else if (restaurants) {
      if (restaurants.length === 0) {
        return (
          <View style={Styles.content}>
            <View style={Styles.container}>
              <Image
                style={Styles.iconStyle}
                source={events}
                resizeMode='contain'
              />
            </View>
          </View>
        );
      }
      return (
        <View style={Styles.content}>
          <View style={Styles.container}>
            <View style={Styles.searchResultsNumber} >
              <Text style={Styles.searchResultsText}> عدد النتائج </Text>
              <Text style={Styles.searchResultsText}> {restaurants.length}</Text>
            </View>
            <View style={Styles.restaurantsList}>
              <FlatList
                data={restaurants}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => this.renderFlatListItem(item)}
              />
            </View>
          </View>
        </View>
      );
    }
  }
}
/**
 * Used to pass the store state to the RestaurantList class.
 * 
 * @param {object} state The redux store state.
 * @param {string} state.SearchedData.restaurants The returned restaurants list state.
 * @param {string} state.SearchedData.loading The returned loading state.
 * @returns {object[]} restaurants state
 * @returns {boolean} loading state
 */
const mapStateToProps = state => {
  return {
    restaurants: state.SearchedData.restaurants,
    loading: state.SearchedData.loading,
  };
};
export default connect(mapStateToProps, {
  searchForRestaurant,
  clearSearchResult
})(RestaurantList); 
