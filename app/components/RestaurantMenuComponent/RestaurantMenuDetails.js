import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { RestauranMenuDetailstItem, MenuList } from './index';
import Styles from './Styles';
/**
 * Defines RestaurantMenuDetails class.
 * 
 * @class RestaurantMenuDetails
 * @extends {Component}
 */
class RestaurantMenuDetails extends Component {
  /**
   * Used to render the RestaurantMenuDetails content
   * 
   * @returns {ReactElement}  
   */
  loadingContent() {
    if (this.props.detailsLoading) {
      return (
        <View style={Styles.spinnerStyle} >
          <ActivityIndicator size='large' color='#e30613' />
        </View>
      );
    } else if (this.props.restaurantItem) {
      return (
        <ScrollView>
          <RestauranMenuDetailstItem item={this.props.restaurantItem} />
          <View style={Styles.menuListStyle}>
            <MenuList />
          </View>
        </ScrollView>
      );
    }
    return <View />;
  }
  /**
   * Used to render the RestaurantMenuDetails component.
   * 
   * @returns {ReactElement} RestaurantMenuDetails component
   */
  render() {
    return (
      <View style={{ backgroundColor: '#ffffff' }}>
        {this.loadingContent()}
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantMenuDetails class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    restaurantItem: state.RestaurantData.restaurantMenu.restaurant,
    detailsLoading: state.SearchedData.detailsLoading
  };
};
export default connect(mapStateToProps)(RestaurantMenuDetails);

