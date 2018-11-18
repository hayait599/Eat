import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';
import {
  Thumbnail
} from 'native-base';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { web, phonecall } from 'react-native-communications';
import Restaurant from './../../repository/Restaurant';
import { IconComponent } from './../../utils/Componenets/RestaurantItem/IconComponent';
import {
  addFavorite,
  removeFavorite,
  storeEvaluation,
  addRatedRestaurants
} from './../../actions/index';
import { getCDNRoute } from './../../services/Api';
import Styles from './Styles';
/**
 * Used to define the RestauranDetailstItem class
 * 
 * @class RestauranDetailstItem
 * 
 * @returns {ReactElement} RestauranDetailstItem component
 */
class RestauranDetailstItem extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data throw the class component.
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {string} starCount Defines the number of clicked stars.
     * @property {string} favoriteIcon Defines the default icon name.
     * @property {object} region Defines the default region value.
     */
    this.state = {
      starCount: 0,
      favoriteIcon: 'heart',
      region: {},
    };
  }
  /**
   * Used to set the rating stars count.
   * 
   * @returns Void
   */
  componentDidMount() {
    if (this.props.item) {
      this.setState({ starCount: this.props.item.rating });
    }
  }
  /** 
   * Called when the component is about to unmount 
   * used to remove the dtatbase event listener.
   * 
   * @returns Void
   */
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  /** 
   * Used to set the value of starCount to the number of clicked rating stars.
   * 
   * @param rating The number of selected stars.
   * 
   * @returns Void
   */
  onStarRatingPress(rating) {
    const isRated = this.props.ratedIds.includes(this.props.item.id);
    if (isRated) {
      Alert.alert(' ', 'This restaurant is already rated');
    } else {
      this.setState({
        starCount: rating
      });
      this.props.addRatedRestaurants(this.props.item.id);
      this.props.storeEvaluation(this.props.item.id, rating);
    }
  }
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
   * 
   * @returns Void
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
        (error) => {
          Alert.alert('', 'Please check your GPS, and Wifi connection');
        }
      );
    } else {
      Alert.alert('', 'No location is available for this restaurant');
    }
  }
  /**
   * Used to open the mobile dial.
   * 
   * @param {string} phoneNumber The restaurant phone number.
   * 
   * @returns Void
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
            this.props.removeFavorite(this.props.item.id);
            Restaurant.deleteRestaurant(this.props.item.id);
          } else {
            this.props.addFavorite(this.props.item.id);
            Restaurant.insertRestaurant(this.props.item);
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
    if (this.props.removeFav) {
      return null;
    }
    if (this.props.favoriteIds) {
      const isFavorite = this.props.favoriteIds.includes(this.props.item.id);
      if (isFavorite) {
        return (
          <IconComponent
            color='#39B54A'
            onIconPress={() => this.addToFavorites()}
            iconName='x'
            iconText='ازالة'
            iconColor='#ffffff'
          />
        );
      }
      return (
        <IconComponent
          color='#39B54A'
          onIconPress={() => this.addToFavorites()}
          iconName='heart'
          iconText='اضف لمفضلتي'
          iconColor='#ffffff'
        />
      );
    }
  }
  /** 
   * Used to render to the favorite item component.
   * 
   * @returns {ReactElement}
   */
  render() {
    if (this.props.item) {
      const { restaurantName } = this.props.item;
      const { restaurantArabicName } = this.props.item;
      const { image } = this.props.item;
      const thumbnail = getCDNRoute('restaurantPhoto') + image;
      const { kitchenType } = this.props.item;
      const { websiteUrl } = this.props.item;
      const { facebook } = this.props.item;
      const { mobile } = this.props.item;
      const { latitude } = this.props.item;
      const { longitude } = this.props.item;
      const { restaurant } = this.props.item;
      return (
        <View style={Styles.itemContainer}>
          <Thumbnail
            large
            source={{ uri: thumbnail }}
          />
          <Text style={Styles.itemText} >{restaurantArabicName}</Text>
          <Text style={Styles.subItemText} >{restaurantName}</Text>
          <Text style={Styles.subItemText} >{kitchenType}</Text>
          <StarRating
            disabled={false}
            maxStars={5}
            reversed
            starSize={responsiveFontSize(2.5)}
            starColor='#008D36'
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
          />
          <View style={Styles.cardSection}>
            {this.renderFavoriteIcon()}
            <IconComponent
              color='#39B54A'
              iconName='facebook'
              iconText='فيسبوك'
              iconColor='#ffffff'
              onIconPress={() => this.handleWebLinking(facebook)}
            />
            <IconComponent
              color='#39B54A'
              iconName='map-pin'
              iconText='على الخارطة'
              iconColor='#ffffff'
              onIconPress={() => this.handleMapLinking(latitude, longitude)}
            />
            <IconComponent
              color='#39B54A'
              iconName='heart'
              iconText='توصيل'
              iconColor='#ffffff'
            />
            <IconComponent
              iconName='phone'
              color='#39B54A'
              iconText='الهاتف'
              iconColor='#ffffff'
              onIconPress={() => this.handlePhoneCall(mobile)}
            />
          </View>
        </View>
      );
    }
  }
}
/**
 * Used to pass the store state to the RestauranDetailstItem class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    accsessToken: state.Authentication.token,
    favoriteIds: state.RestaurantData.restaurantsId,
    ratedIds: state.RestaurantData.ratedRestaurants
  };
};
export default connect(mapStateToProps, {
  addFavorite,
  removeFavorite,
  storeEvaluation,
  addRatedRestaurants
})(RestauranDetailstItem);
