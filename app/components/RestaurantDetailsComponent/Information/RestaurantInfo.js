import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { web } from 'react-native-communications';
import Styles from './../Styles';
/**
 * Defines RestaurantInfo class .
 * Used to show extra information about the restaurant.
 * 
 * @class RestaurantInfo
 * @extends {Component}
 */
class RestaurantInfo extends Component {
  /** 
   * Used to open the restaurant website in the browser.
   * 
   * @param {string} url the restaurant website url
   */
  handleWebLinking = (url) => {
    if (url) {
      web(url);
    } else {
      Alert.alert('', 'The restaurant site is not provided');
    }
  };
  /**
   * Used to renser the restaurant working schedule item.
   * 
   * @param {object} item
   * @returns {ReactElement} Flat list item component. 
   */
  renderFlatListItem(item) {
    let workDay;
    switch (item.workDay) {
      case 'Sunday': workDay = 'الاحد'; break;
      case 'Monday': workDay = 'الاثنين'; break;
      case 'Tuesday': workDay = 'الثلاثاء'; break;
      case 'Wednesday': workDay = 'الاربعاء'; break;
      case 'Thursday': workDay = 'الخميس'; break;
      case 'Friday': workDay = 'الجمعة'; break;
      case 'Saturday': workDay = 'السبت'; break;
      default: return 0;
    }
    return (
      <View style={Styles.workingSchedule}>
        <Text style={Styles.workingTime}>
          {item.start} - {item.end}
        </Text>
        <Text style={Styles.information}>
          {workDay}
        </Text>
      </View>
    );
  }
  /**
   * Used to render the restaurant info component.
   * 
   * @returns {ReactElement} RestaurantInfo component
   */
  render() {
    const { kitchenType } = this.props.item;
    const { description } = this.props.item;
    const { address } = this.props.item;
    const { mobile } = this.props.item;
    const { websiteUrl } = this.props.item;
    const { city } = this.props.item;
    return (
      <View style={Styles.restaurantInfoContainer} >
        <View style={Styles.restaurantInfoContainer}>
          <Text style={Styles.informationTitle}>
            معلومات الاتصال 
          </Text>
          <Text style={Styles.information}>{kitchenType}</Text>
          <Text style={Styles.information}>{city}</Text>
          <Text style={Styles.information}>{mobile}</Text>
          <Text style={Styles.information}>{mobile}</Text>
          <Text style={Styles.information}>{websiteUrl}</Text>
          <Text style={Styles.information}>{address}</Text>
        </View>
        <View style={Styles.restaurantInfoContainer}>
          <Text style={Styles.informationTitle}>عن المطعم </Text>
          <Text style={Styles.information}>
            {description}
          </Text>
        </View>
        <View style={Styles.restaurantInfoContainer}>
          <Text style={Styles.informationTitle}>ساعات العمل</Text>
          <View style={Styles.workingTimeList} >
            <FlatList
              data={this.props.workingHours}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => this.renderFlatListItem(item)}
            />
          </View>
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantInfo class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props 
 */
const mapStateToProps = state => {
  return {
    item: state.SearchedData.restaurantItem.restaurant,
    workingHours: state.SearchedData.restaurantItem.workingHours,
    evaluation: state.SearchedData.restaurantItem.restaurant.evaluation,
  };
};
export default connect(mapStateToProps)(RestaurantInfo);
