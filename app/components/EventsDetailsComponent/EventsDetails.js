import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { getCDNRoute } from './../../services/Api';
import Styles from './Styles';
/**
 * Defines EventsDetails component
 * 
 * @class EventsDetails
 * @extends {Component}
 */
class EventsDetails extends Component {
  /**
   * Used to render EventsDetails component
   * 
   * @returns {ReactElement} OfferItem component
   */
  render() {
    if (this.props.item) {
      const { image } = this.props.item;
      const { description } = this.props.item;
      const { date_to } = this.props.item;
      const { date_from } = this.props.item;
      const { title } = this.props.item;
      const { time_to } = this.props.item;
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
      return (
        <MenuHeader
          onBackPress={() => Actions.pop()}
          thirdIconName='arrow-left'
        >
          <View style={Styles.container}>
            <ScrollView >
              <View style={Styles.offersContainer} >
                <Text style={Styles.dayStyle}>{date[2]}</Text>
                <Text style={Styles.restaurantName}>{month}</Text>
                <Text style={Styles.restaurantName}>{title}</Text>
                <Text style={Styles.eventState}>{time_to}</Text>
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
            </ScrollView>
          </View>
        </MenuHeader>
      );
    }
  }
}
export default EventsDetails;
