import React, { Component } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  searchForRestaurant,
  clearSearchResult,
  setSearchPageNumber,
  getFilteredRestaurantsScroll
} from './../../actions/index';
import RestaurantItem from './../../utils/Componenets/RestaurantItem/RestaurantItem';
import Styles from './Styles';
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
      page: 1,
      filterPage: 1,
      isInside: true
    };
  }
  /**
   * Called when the component is about to mount 
   * Used to make a search request
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.clearSearchResult();
    this.setState({ page: 1 });
    this.props.setSearchPageNumber(1);
    this.props.searchForRestaurant(this.props.text, this.state.page);
  }
  /**
   * Called when the component is about to unmount 
   * Used to clear the search resault.
   * 
   * @returns Void
   */
  componentWillUnmount() {
    this.props.clearSearchResult();
    this.setState({ page: 1 });
    this.props.setSearchPageNumber(1);
    this.setState({ isInside: false });
  }
  /**
   * Called when the user reaches the end of the flatList
   * Used to make a search request and fetch 3 more items.
   * 
   * @returns Void
   */
  onEndReached = () => {
    if (this.props.searchFlag) {
      this.props.setSearchPageNumber(this.state.filterPage + 1);
      this.setState({ filterPage: this.state.filterPage + 1 });
      this.props.getFilteredRestaurantsScroll();
    } else {
      const page = this.state.page + 1;
      this.setState({ page });
      const check = this.props.restaurants.length < 3 && this.props.restaurants.length > 0;
      const checkText = this.props.text;
      if (!check && checkText && this.state.isInside) {
        if (this.props.text.length > 0) {
          this.props.searchForRestaurant(this.props.text, page);
        }
      }
    }
  };
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
              onEndReached={this.onEndReached}
              onEndReachedThreshold={0.5}
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
 * Used to pass the store state to the RestaurantList class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    restaurants: state.SearchedData.restaurants,
    loading: state.SearchedData.loading,
    AdvertisementImages: state.AdvertisementImages.searchScreen, 
    searchFlag: state.RestaurantData.searchFlag 
  };
};
export default connect(mapStateToProps, {
  searchForRestaurant,
  clearSearchResult,
  setSearchPageNumber, 
  getFilteredRestaurantsScroll 
})(RestaurantList); 
