import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {
  Thumbnail
} from 'native-base';
import { connect } from 'react-redux'; 
import { Actions } from 'react-native-router-flux';
import { web, phonecall } from 'react-native-communications';
import Offers from './../../repository/Offers'; 
import { 
  addFavoriteOffer, 
  removeFavoriteOffer 
} from './../../actions/index'; 
import { getCDNRoute } from './../../services/Api';
import { IconComponent } from './../../utils/Componenets/RestaurantItem/IconComponent';
import Styles from './Styles';


const calendar = require('./../../images/OfferScreen/Calendar.png');
const schedule = require('./../../images/OfferScreen/Schedule.png');
const warning = require('./../../images/OfferScreen/Warning.png');
/**
 * Defines dish information component.
 * 
 * @class DishInformation
 * @extends {Component}
 */
class OffersInformation extends Component {
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
            color='#e62531'
            iconColor='#ffffff' 
          /> 
        ); 
      } 
      return ( 
        <IconComponent 
          onIconPress={() => this.addToFavorites()} 
          iconName='heart' 
          iconText='اضف لمفضلتي' 
          color='#e62531'
          iconColor='#ffffff' 
        /> 
      ); 
    } 
  } 
  /**
   * Used to render profile screen component.
   * 
   * @returns {ReactElement}  component
   */
  render() {
    if (this.props.item) {
      const { restaurantEnglishName } = this.props.item;
      const { restaurantArabicName } = this.props.item;
      const { image } = this.props.item;
      const { logo } = this.props.item;
      const { websiteUrl } = this.props.item;
      const { facebook } = this.props.item;
      const { mobile } = this.props.item;
      const { latitude } = this.props.item;
      const { longitude } = this.props.item;
      const { description } = this.props.item;
      const { date_from } = this.props.item;
      const { date_to } = this.props.item;
      return (
        <ScrollView>
          <View style={Styles.container}>
            <View style={Styles.section}>
              <Thumbnail
                large
                source={{ uri: getCDNRoute('restaurantPhoto') + logo }}
              />
              <Text style={Styles.sectionText}>{restaurantArabicName}</Text>
              <Text style={Styles.sectionText}>{restaurantEnglishName}</Text>
              <View style={Styles.iconBar}>
                {this.renderFavoriteIcon()} 
                <IconComponent
                  iconName='globe'
                  iconText='موقع الكتروني'
                  color='#e62531'
                  iconColor='#ffffff'
                  onIconPress={() => this.handleWebLinking(websiteUrl)}
                />
                <IconComponent
                  iconName='facebook'
                  iconText='فيسبوك'
                  color='#e62531'
                  iconColor='#ffffff'
                  onIconPress={() => this.handleWebLinking(facebook)}
                />
                <IconComponent
                  iconName='map-pin'
                  iconText='على الخارطة'
                  color='#e62531'
                  iconColor='#ffffff'
                  onIconPress={() => this.handleMapLinking(latitude, longitude)}
                />
                <IconComponent
                  iconName='heart'
                  iconText='توصيل'
                  color='#e62531'
                  iconColor='#ffffff'
                />
                <IconComponent
                  iconName='phone'
                  iconText='الهاتف'
                  color='#e62531'
                  iconColor='#ffffff'
                  onIconPress={() => this.handlePhoneCall(mobile)}
                />
              </View>
              <TouchableOpacity 
                onPress={() => Actions.openFullPageScreen({
                  imageUrl: getCDNRoute('offersPhoto') + image 
                })}
                style={{ flex: 1 }}
              >
                <Image
                  style={Styles.imageStyle}
                  source={{ uri: getCDNRoute('offersPhoto') + image }}
                />
              </TouchableOpacity>
              <Image
                style={Styles.iconStyle}
                source={calendar}
                resizeMode='contain'
              />
              <Text style={Styles.sectionText}>تاريخ النشر</Text>
              <Text style={Styles.sectionText}>من {date_from} الى {date_to}</Text>
              <Image
                style={Styles.iconStyle}
                source={schedule}
                resizeMode='contain'
              />
              <Text style={Styles.sectionText}>التفاصيل</Text>
              <Text style={Styles.sectionText}>{description}</Text>
              <Image
                style={Styles.iconStyle}
                source={warning}
                resizeMode='contain'
              />
              <Text style={Styles.warningText}>
                انتهاء مدة عرض الاعلان على منصة اكل و شرب لا يعني
                بالضرورة انتهائه من جهة المطعم المعلن.اقتضي التنويه
              </Text>
              <Text style={Styles.warningText}>
                The end of the period of presentation of the advertisement on
                the platform eating and drinking does not necessarily mean
                the end of the restaurant, declared, required mention.
              </Text>
            </View>
          </View>
        </ScrollView>
      );
    }
    return <View />;
  }
}
/** 
 * Used to pass the store state to the OffersInformation class. 
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
})(OffersInformation); 
