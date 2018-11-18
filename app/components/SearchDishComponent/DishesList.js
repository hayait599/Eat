import React, { Component } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { searchForDish, clearSearchResult } from './../../actions/index';
import RestaurantItem from './../../utils/Componenets/RestaurantItem/RestaurantItem';
import Styles from './Styles';
/**
* Defines the DishesList list Component.
* 
* @class DishesList
* @extends {SearchScreen}
*/
class DishesList extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the RestaurantList component.
   * @property {int} page Defines the number of returned items.
   * 
   */
  constructor(props) {
    super(props);
    this.state = {
      page: 2,
      isInside: true
    };
  }
 /**
  * Called when the component is about to mount 
  * Used to clear the restaurants state  
  *
  * @returns void
  */ 
 componentWillMount() { 
   this.props.clearSearchResult(); 
   this.setState({ page: 2 }); 
   this.props.searchForDish(this.props.text, this.state.page);
 } 
 /** 
  * Called when the component is about to unmount 
  * Used to clear the restaurants state  
  *
  * @returns void
  */ 
 componentWillUnmount() { 
   this.props.clearSearchResult(); 
   this.setState({ page: 2 }); 
   this.setState({ isInside: false }); 
 } 
  /**
   * Called when the user reaches the end of the flatList
   * Used to make a search request and fetch 3 more items.
   * 
   * @returns void
   */
  onEndReached = () => {
    const page = this.state.page + 1;
    this.setState({ page });
    const check = this.props.restaurants.length < 3 && this.props.restaurants.length > 0;
    if (this.props.text && !check) {
      this.props.searchForDish(this.props.text, page);
    }  
  };
  /** 
   * Used to remove duplicated objects. 
   *  
   * @param {object[]} arr  
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
    const dishId = item.dishId;
    return (
      <RestaurantItem
        color='#575756'
        iconColor='#ffffff'
        backgroundColor='#ffffff'
        removeFav
        item={item}
        onPress={() => Actions.dishDetailsScreen({ dishId })}
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
          <ActivityIndicator size='small' color='#e30613' />
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
        <View style={Styles.container}>
          <View style={Styles.restaurantsList}>
            <FlatList
              data={restaurants} 
              keyExtractor={(item) => item.dishId}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => this.renderFlatListItem(item)}
            />
            {this.renderLoading()}
          </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the DishesList class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    restaurants: state.SearchedData.restaurants,
    loading: state.SearchedData.loading
  };
};
export default connect(mapStateToProps, { searchForDish, clearSearchResult })(DishesList);
