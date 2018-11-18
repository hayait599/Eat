import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import { web, phonecall } from 'react-native-communications';
import { getCDNRoute } from './../../../services/Api';
import {
  IconComponent
} from './../../../utils/Componenets/RestaurantItem/IconComponent';
import Offers from './../../../repository/Offers';
import {
  addFavoriteOffer,
  removeFavoriteOffer
} from './../../../actions/index';
import Styles from './../Styles';
/**
 * Defines RestaurantOfferItem component
 * 
 * @class RestaurantOfferItem
 * @extends {Component}
 */
class RestaurantOfferItem extends Component {
  /** 
    * Used to open the restaurant website in the browser.
    * 
    * @param {string} url the restaurant website url
    * @return void
    */
  handleWebLinking = (url) => {
    if (url) {
      const isUrl = url.includes('http');
      if (isUrl) {
        web(url);
      } else {
        web('https://' + url);
      }
    } else {
      Alert.alert('', 'The restaurant site is not provided');
    }
  };
  /** 
   * Used to open google maps and direct the user to the restaurant destination.
   * 
   * @param {float} latitude The restaurant latitude
   * @param {float} longtude The restaurant longtude
   * @return void
   */
  handleMapLinking = (latitude, longitude) => {
    let url = 'https://www.google.com/maps/dir/?api=1&origin=';
    if (latitude && longitude) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          url = url + position.coords.latitude + ',' + position.coords.longitude +
            '&destination=' + latitude + ',' + longitude;
          Linking.openURL(url);
        },
        (error) =>
          Alert.alert(' ', 'Can not take your location please make sure your GPS is enabled'),
      );
    } else {
      Alert.alert(' ', 'No location is available for this restaurant');
    }
  };
  /** 
   * Used to open the mobile dial.
   * 
   * @param {string} phoneNumber The restaurant phone number.
   * @return void
   */
  handlePhoneCall = (phoneNumber) => {
    if (phoneNumber) {
      phonecall(phoneNumber, true);
    } else {
      Alert.alert('', 'The restaurant phone is not provided');
    }
  }
  /** 
   * Used to set or unset favorite items.
   *
   * @return void
   */
  addToFavorites() {
    try {
      if (this.props.accsessToken) {
        if (this.props.accsessToken.length > 0) {
          const isFavorite = this.props.favoriteIds.includes(this.props.item.id);
          if (isFavorite) {
            this.props.removeFavoriteOffer(this.props.item.id);
            Offers.deleteOffer(this.props.item.id);
          } else {
            this.props.addFavoriteOffer(this.props.item.id);
            Offers.insertOffer(this.props.item);
          }
        } else {
          Alert.alert('', 'Please login to continue');
        }
      } else {
        Alert.alert('', 'Please login to continue');
      }
    } catch (error) {

    }
  }
  /** 
   * Used to render the favorite icon component.
   * 
   * @returns IconComponent.
   */
  renderFavoriteIcon() {
    if (this.props.favoriteIds) {
      const isFavorite = this.props.favoriteIds.includes(this.props.item.id);
      if (isFavorite) {
        return (
          <IconComponent
            onIconPress={() => this.addToFavorites()}
            iconName='x'
            iconText='اضف لمفضلتي'
            iconColor='#ffffff'
          />
        );
      }
      return (
        <IconComponent
          onIconPress={() => this.addToFavorites()}
          iconName='heart'
          iconText='اضف لمفضلتي'
          iconColor='#ffffff'
        />
      );
    }
  }
  /**
   * Used to render offers item component
   * 
   * @returns {ReactElement} OfferItem component
   */
  render() {
    if (this.props.item) {
      const image = this.props.item.ad_image;
      const description = this.props.item.ad_disc;
      const date = this.props.item.date_from;
      return (
        <View style={Styles.offersContainer} >
          <Text style={Styles.restaurantName} >
            تاريخ النشر
          </Text>
          <Text style={Styles.restaurantName} >
            {date}
          </Text>
          <Image
            source={{ uri: getCDNRoute('offersPhoto') + image }}
            style={Styles.restaurantImage}
          />
          <Text style={Styles.restaurantName} >
            تفاصيل
          </Text>
          <Text style={Styles.offerDetailsText} >
            {description}
          </Text>
          <View style={Styles.horizontalLine} />
        </View>
      );
    }
  }
}
/**
 * Used to pass the store state to the RestaurantOfferItem class.
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
})(RestaurantOfferItem);
