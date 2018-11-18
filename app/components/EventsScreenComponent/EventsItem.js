import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { getCDNRoute } from './../../services/Api';
import Styles from './Styles';
/**
 * Defines events item component
 * 
 * @class EventsItem
 * @extends {Component}
 */
class EventsItem extends Component {
  /**
   * Used to render events item component
   * 
   * @returns {ReactElement} EventsItem component
   */
  render() {
    if (this.props.item) {
      const { image } = this.props.item;
      const { description } = this.props.item;
      const { time_to } = this.props.item;
      const { date_to } = this.props.item;
      const { title } = this.props.item;
      let eventState;
      if (this.props.event === 'past') {
        eventState = 'حدث منتهي';
      } else {
        eventState = time_to;
      }
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
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
        >
          <View style={Styles.offersContainer} >
            <Text style={Styles.dayStyle}>{date[2]}</Text>
            <Text style={Styles.restaurantName}>{month}</Text>
            <Text style={Styles.restaurantName}>{title}</Text>
            <Text style={Styles.eventState}>{eventState}</Text>
            <Image
              source={{ uri: getCDNRoute('events') + image }}
              style={Styles.restaurantImage}
            />
            <Text style={Styles.offerDetailsText} >
              {description}
            </Text>
            <Text style={Styles.textInfoStyle}>اضغط لمزيد من المعلومات</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
}
export default EventsItem;
