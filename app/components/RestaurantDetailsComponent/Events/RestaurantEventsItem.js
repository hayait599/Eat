import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { getCDNRoute } from './../../../services/Api';
import {
  addFavoriteOffer,
  removeFavoriteOffer
} from './../../../actions/index';
import Styles from './../Styles';

const calendar = require('./../../../images/EventsCalender.png');
const timer = require('./../../../images/EventsTimer.png');
/**
 * Defines RestaurantEventsItem component
 * 
 * @class RestaurantEventsItem
 * @extends {Component}
 */
class RestaurantEventsItem extends Component {
  /**
   * Used to render offers item component
   * 
   * @returns {ReactElement} OfferItem component
   */
  render() {
    if (this.props.item) {
      const image = this.props.item.image;
      const { time_to } = this.props.item;
      const { date_to } = this.props.item;
      const { date_from } = this.props.item;
      const { time_from } = this.props.item;
      let month;
      const date = date_to.split('-');
      switch (date[1]) {
        case '01':
          month = 'January';
          break;
        case '02':
          month = 'February';
          break;
        case '03':
          month = 'March';
          break;
        case '04':
          month = 'April';
          break;
        case '05':
          month = 'May';
          break;
        case '06':
          month = 'June';
          break;
        case '07':
          month = 'July';
          break;
        case '08':
          month = 'August';
          break;
        case '09':
          month = 'September';
          break;
        case '10':
          month = 'October';
          break;
        case '11':
          month = 'November';
          break;
        case '12':
          month = 'December';
          break;
        default: month = 'January';
      }
      const description = this.props.item.description;
      return (
        <View style={Styles.offersContainer} >
          <View style={Styles.eventsTitle}>
            <View style={Styles.eventsSubtitle}>
              <Text style={Styles.restaurantName}>{time_to}</Text>
              <Image
                style={Styles.timerIconStyle}
                source={timer}
                resizeMode='contain'
              />
            </View>
            <View style={Styles.eventsSubtitle}>
              <Text style={Styles.restaurantName}>{month}</Text>
              <Text style={Styles.dayStyle}>{date[2]}</Text>
            </View>
          </View>
          <Image
            source={{ uri: getCDNRoute('events') + image }}
            style={Styles.restaurantImage}
          />
          <Text style={Styles.offerDetailsText} >
            {description}
          </Text>
          <Text style={Styles.dateStyle}>{date_from}  حتى  {date_to}</Text>
          <Text style={Styles.dateStyle}>{time_from}  حتى  {time_to}</Text>
        </View>
      );
    }
  }
}
/**
 * Used to pass the store state to the RestaurantEventsItem class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    accsessToken: state.Authentication.token,
    favoriteIds: state.RestaurantData.offersId
  };
};
export default connect(mapStateToProps, {
  addFavoriteOffer,
  removeFavoriteOffer
})(RestaurantEventsItem);
