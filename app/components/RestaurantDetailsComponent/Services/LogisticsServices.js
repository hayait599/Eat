import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Styles from './../Styles';
/**
 * Defines LogisticsServices class.
 * 
 * @class LogisticsServices
 * @extends {Component}
 */
class LogisticsServices extends Component {

  /**
   * Used to render the menu list component.
   * 
   * @returns {ReactElement} MenuList component
   */
  render() {
    if (this.props.restaurantServices) {
      const { tv } = this.props.restaurantServices;
      const { beInSport } = this.props.restaurantServices;
      const { playin_yard } = this.props.restaurantServices;
      const { organicFoods } = this.props.restaurantServices;
      const { cars_parking } = this.props.restaurantServices;
      const { calling_taxi } = this.props.restaurantServices;
      const { takeAway } = this.props.restaurantServices;
      const { open_set_spaces } = this.props.restaurantServices;
      const { visa_pay } = this.props.restaurantServices;
      const { free_wifi } = this.props.restaurantServices;
      const { baby_chare } = this.props.restaurantServices;
      const { table_reserv_onPhone } = this.props.restaurantServices;
      const { airCondtion } = this.props.restaurantServices;
      const { cams } = this.props.restaurantServices;
      const { handicap } = this.props.restaurantServices;
      const organicFoodImage = (organicFoods === 0) ?
        require('./../../../images/org1.png') :
        require('./../../../images/org2.png');
      const beinService = (beInSport === 0) ?
        require('./../../../images/bein1.png') :
        require('./../../../images/bein2.png');
      const tvService = (tv === 0) ?
        require('./../../../images/tv1.png') :
        require('./../../../images/tv2.png');
      const yardService = (playin_yard === 0) ?
        require('./../../../images/play1.png') :
        require('./../../../images/play2.png');
      const parkingService = (cars_parking === 0) ?
        require('./../../../images/parking1.png') :
        require('./../../../images/parking2.png');
      const taxiService = (calling_taxi === 0) ?
        require('./../../../images/taxi1.png') :
        require('./../../../images/taxi2.png');
      const takeAwayService = (takeAway === 0) ?
        require('./../../../images/tak1.png') :
        require('./../../../images/tak2.png');
      const openYardsService = (open_set_spaces === 0) ?
        require('./../../../images/land1.png') :
        require('./../../../images/land2.png');
      const visaService = (visa_pay === 0) ?
        require('./../../../images/visa1.png') :
        require('./../../../images/visa2.png');
      const wifiService = (free_wifi === 0) ?
        require('./../../../images/wifi1.png') :
        require('./../../../images/wifi2.png');
      const babyCareService = (baby_chare === 0) ?
        require('./../../../images/chr1.png') :
        require('./../../../images/chr2.png');
      const reservationService = (table_reserv_onPhone === 0) ?
        require('./../../../images/res1.png') :
        require('./../../../images/res2.png');
      const airConditionerService = (airCondtion === 0) ?
        require('./../../../images/air1.png') :
        require('./../../../images/air2.png');
      const camService = (cams === 0) ?
        require('./../../../images/cam1.png') :
        require('./../../../images/cam2.png');
      const handicapService = (handicap === 0) ?
        require('./../../../images/hc1.png') :
        require('./../../../images/hc2.png');

      return (
        <View style={Styles.restaurantInfoContainer}>
          <Text style={Styles.informationTitle}>الخدمات اللوجستية </Text>
          <View style={Styles.logisticsSection}>
            <View style={Styles.logisticsCard}>
              <Image
                style={Styles.logisticsImage}
                source={organicFoodImage}
              />
              <Image
                style={Styles.logisticsImage}
                source={beinService}
              />
              <Image
                style={Styles.logisticsImage}
                source={parkingService}
              />
              <Image
                style={Styles.logisticsImage}
                source={taxiService}
              />
              <Image
                style={Styles.logisticsImage}
                source={yardService}
              />
            </View>
            <View style={Styles.logisticsCard}>

              <Image
                style={Styles.logisticsImage}
                source={reservationService}
              />
              <Image
                style={Styles.logisticsImage}
                source={openYardsService}
              />
              <Image
                style={Styles.logisticsImage}
                source={wifiService}
              />
              <Image
                style={Styles.logisticsImage}
                source={visaService}
              />
              <Image
                style={Styles.logisticsImage}
                source={camService}
              />
            </View>
            <View style={Styles.logisticsCard}>
              <Image
                style={Styles.logisticsImage}
                source={airConditionerService}
              />
              <Image
                style={Styles.logisticsImage}
                source={takeAwayService}
              />
              <Image
                style={Styles.logisticsImage}
                source={tvService}
              />
              <Image
                style={Styles.logisticsImage}
                source={babyCareService}
              />
              <Image
                style={Styles.logisticsImage}
                source={handicapService}
              />
            </View>
          </View>
        </View>
      );
    }
    return (
      <View />
    );
  }
}
/**
 * Used to pass the store state to the LogisticsServices class.
 *
 * @param {object} state The redux store state.
 * 
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    restaurantServices: state.SearchedData.restaurantItem.restaurant.restaurant_services[0],
  };
};
export default connect(mapStateToProps)(LogisticsServices);
