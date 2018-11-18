import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { connect } from 'react-redux';
import { RestauranDetailstItem, RestaueantsTabs } from './index';
import Styles from './Styles';

const closed = require('./../../images/RestaurantDetails/Closed.png');
const open = require('./../../images/RestaurantDetails/Open.png');
/**
 * Defines RestaurantDetails class.
 * 
 * @class RestaurantDetails
 * @extends {Component}
 */
class RestaurantDetails extends Component {
  /**
   * Used to render the restaurant details content
   * 
   * @returns {ReactElement}  
   */
  loadingContent() {
    let color;
    let message = '';
    let imageIcon;
    if (this.props.restaurantState) {
      color = this.props.restaurantState.color;
      message = this.props.restaurantState.message;
      if (color === '#95c11f') {
        imageIcon = open;
      } else {
        imageIcon = closed;
      }
    }
    if (this.props.detailsLoading) {
      return (
        <View style={Styles.spinnerStyle} >
          <ActivityIndicator size='large' color='#e30613' />
        </View>
      );
    } else if (this.props.restaurantItem) {
      return (
        <ScrollView>
          <View style={Styles.container}>
            <View
              style={{
                alignItems: 'center',
                paddingTop: responsiveHeight(1),
                paddingBottom: responsiveHeight(1),
                backgroundColor: color,
                height: responsiveHeight(10),
                justifyContent: 'center',
                width: responsiveWidth(100),
              }}
            >
              <Image
                resizeMode='contain'
                style={Styles.itemIcon}
                source={imageIcon}
              />
              <Text style={Styles.restaurantStateText}>
                {message}
              </Text>
            </View>
            <RestauranDetailstItem item={this.props.restaurantItem} />
          </View>
          <RestaueantsTabs />
        </ScrollView>
      );
    }
    return <View />;
  }
  /**
   * Used to render the restaurant details screen component.
   * 
   * @returns {ReactElement} RestaurantDetailsScreen component
   */
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        {this.loadingContent()}
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantDetails class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    restaurantItem: state.SearchedData.restaurantItem.restaurant,
    detailsLoading: state.SearchedData.detailsLoading,
    workingHours: state.SearchedData.restaurantItem.workingHours,
    restaurantState: state.SearchedData.restaurantItem.restaurantState,
    restaurantMenu: state.SearchedData.restaurantItem.restaurantMenu,
  };
};
export default connect(mapStateToProps)(RestaurantDetails);

