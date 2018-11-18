import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Styles from './../Styles';

const smoking = require('./../../../images/RestaurantDetails/Smoking.png');
const noSmoking = require('./../../../images/RestaurantDetails/NoSmoking.png');

const alcohol = require('./../../../images/RestaurantDetails/Alcohol.png');
const noAlcohol = require('./../../../images/RestaurantDetails/NoAlcohol.png');

const delivery = require('./../../../images/RestaurantDetails/Delivery.png');
const noDelivery = require('./../../../images/RestaurantDetails/NoDelivery.png');
/**
 * Defines AvailableServices class.
 * 
 * @class AvailableServices
 * @extends {Component}
 */
class AvailableServices extends Component {
  /**
   * Used to render the smoking icon
   * 
   * @param {int} smok
   * 
   * @returns {ReactElement} 
   */
  renderSmokingIcon(smok) {
    if (smok === 0) {
      return (
        <View style={Styles.unAvailableserviceSection}>
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={noSmoking}
          />
          <Text style={Styles.serviceText}>التدخين ممنوع</Text>
        </View>
      );
    }
    return (
      <View style={Styles.serviceSection}>
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={smoking}
        />
        <Text style={Styles.serviceText}>التدخين مسموح</Text>
      </View>
    );
  }
  /**
   * Used to render the alcoholicDrinks icon
   * 
   * @param {int} alcoholicDrinks
   * 
   * @returns {ReactElement} 
   */
  renderAlcoholIcon(alcoholicDrinks) {
    if (alcoholicDrinks === 0) {
      return (
        <View style={Styles.unAvailableserviceSection}>
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={noAlcohol}
          />
          <Text style={Styles.serviceText}>لايقدم مشروبات كحولية</Text>
        </View>
      );
    }
    return (
      <View style={Styles.serviceSection}>
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={alcohol}
        />
        <Text style={Styles.serviceText}>يقدم مشروبات كحولية</Text>
      </View>
    );
  }
  /**
   * Used to render the deliveryIcon icon
   * 
   * @returns {ReactElement} 
   */
  renderDeliveryIcon(deliveryService) {
    if (deliveryService === 0) {
      return (
        <View style={Styles.unAvailableserviceSection}>
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={noDelivery}
          />
          <Text style={Styles.serviceText}>لا يوجد خمة توصيل</Text>
        </View>
      );
    }
    return (
      <View style={Styles.serviceSection}>
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={delivery}
        />
        <Text style={Styles.serviceText}>يوجد خدمة توصيل</Text>
      </View>
    );
  }
  /**
   * Used to render the services icons components.
   * 
   * @returns {ReactElement} AvailableServices component
   */
  render() {
    if (this.props.item) {
      const { alcoholicDrinks } = this.props.item;
      const { deliveryService } = this.props.item;
      const { smok } = this.props.item;
      return (
        <View>
          {this.renderSmokingIcon(smok)}
          {this.renderAlcoholIcon(alcoholicDrinks)}
          {this.renderDeliveryIcon(deliveryService)}
        </View>
      );
    }
    return (
      <View />
    );
  }
}
export default AvailableServices;
