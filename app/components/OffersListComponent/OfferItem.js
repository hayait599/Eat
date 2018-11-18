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
import { getCDNRoute } from './../../services/Api';
import {
  IconComponent
} from './../../utils/Componenets/RestaurantItem/IconComponent';
import Offers from './../../repository/Offers';
import {
  addFavoriteOffer,
  removeFavoriteOffer
} from './../../actions/index';
import Styles from './Styles';
/**
 * Defines offers item component
 * 
 * @class OfferItem
 * @extends {Component}
 */
class OfferItem extends Component {
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
  * @returns Void 
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
            iconText='ازالة'
            iconColor='#ffffff'
            color='#e62531'
          />
        );
      }
      return (
        <IconComponent
          onIconPress={() => this.addToFavorites()}
          iconName='heart'
          iconText='اضف لمفضلتي'
          iconColor='#ffffff'
          color='#e62531'
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
      const { restaurantEnglishName } = this.props.item;
      const { restaurantArabicName } = this.props.item;
      const { image } = this.props.item;
      const { logo } = this.props.item;
      const { websiteUrl } = this.props.item;
      const { facebook } = this.props.item;
      const { latitude } = this.props.item;
      const { longitude } = this.props.item;
      const { mobile } = this.props.item;
      const { description } = this.props.item;
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
        >
          <View style={Styles.offersContainer} >
            <Text style={Styles.restaurantName}>{restaurantArabicName}</Text>
            <Text style={Styles.restaurantName}>{restaurantEnglishName}</Text>
            <Image
              source={{ uri: getCDNRoute('offersPhoto') + image }}
              style={Styles.restaurantImage}
            />
            <View style={Styles.iconsBar} >
              {this.renderFavoriteIcon()}
              <IconComponent
                iconName='globe'
                iconText='موقع الكتروني'
                iconColor='#ffffff'
                color='#e62531'
                onIconPress={() => this.handleWebLinking(websiteUrl)}
              />
              <IconComponent
                iconName='facebook'
                iconText='فيس بوك'
                iconColor='#ffffff'
                color='#e62531'
                onIconPress={() => this.handleWebLinking(facebook)}
              />
              <IconComponent
                iconName='map-pin'
                iconText='على الخارطة'
                iconColor='#ffffff'
                color='#e62531'
                onIconPress={() => this.handleMapLinking(latitude, longitude)}
              />
              <IconComponent
                iconName='heart'
                iconText='لدينا توصيل'
                color='#e62531'
                iconColor='#ffffff'
              />
              <IconComponent
                iconName='phone'
                iconText='الهاتف'
                iconColor='#ffffff'
                color='#e62531'
                onIconPress={() => this.handlePhoneCall(mobile)}
              />
            </View>
            <Text style={Styles.offerDetailsText} >
              {description}
            </Text>
            <View style={Styles.horizontalLine} />
          </View>
        </TouchableOpacity>
      );
    }
  }
}
/** 
 * Used to pass the store state to the OfferItem class. 
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
})(OfferItem); 
