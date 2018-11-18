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
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem } from 'native-base';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';
import { web, phonecall } from 'react-native-communications';
import { connect } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  storeEvaluation,
  addRatedRestaurants
} from './../../../actions/index';
import { getCDNRoute } from './../../../services/Api';
import Restaurant from './../../../repository/Restaurant';
import { IconComponent } from './IconComponent';
import Styles from './Styles';
/**
 * Defines the restaurant item component.
 * 
 * @class RestaurantItem
 * @extends {Component}
 */
class RestaurantItem extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data throw the class component.
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {string} starCount Defines the number of clicked stars.
     * @property {bool} isModalVisible Defines the default visiblity of the module.
     * @property {string} favoriteIcon Defines the default icon name.
     * @property {object} region Defines the default region value.
     */
    this.state = {
      starCount: 0,
      isModalVisible: false,
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
   * Used to set the visiblety of the module to true.
   * 
   * @returns Void
   */
  showModal = () => this.setState({ isModalVisible: true });
  /** 
   * Used to set the visiblety of the module to false.
   * 
   * @returns Void
   */
  hideModal = () => this.setState({ isModalVisible: false })
  /** 
   * Used to open the restaurant website in the browser.
   * 
   * @param {string} url the restaurant website url
   * 
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
    if (this.props.onlineOrder) {
      if (this.props.item.id) {
        return (
          <IconComponent
            onIconPress={() => Actions.restaurantMenuScreen({ id: this.props.item.id })}
            iconName='shopping-cart'
            iconText='قائمة الطعام'
            iconColor={this.props.iconColor}
            color={this.props.color}
          />
        );
      }
    }
    if (this.props.removeFav) {
      return null;
    }
    if (this.props.favoriteIds) {
      const isFavorite = this.props.favoriteIds.includes(this.props.item.id);
      if (isFavorite) {
        return (
          <IconComponent
            onIconPress={() => this.addToFavorites()}
            iconName='x'
            iconText='ازالة'
            iconColor={this.props.iconColor}
            color={this.props.color}
          />
        );
      }
      return (
        <IconComponent
          onIconPress={() => this.addToFavorites()}
          iconName='heart'
          iconColor={this.props.iconColor}
          color={this.props.color}
          iconText='اضف لمفضلتي'

        />
      );
    }
  }
  /**
   * Used to render the restaurant item component.
   *  
   * @returns {ReactElement} RestaurantItem component
   */
  render() {
    if (this.props.item) {
      let thumbnail;
      const { image } = this.props.item;
      if (this.props.removeFav) {
        thumbnail = getCDNRoute('dishPhoto') + image;
      } else {
        thumbnail = getCDNRoute('restaurantPhoto') + image;
      }
      const { restaurantName } = this.props.item;
      const { restaurantArabicName } = this.props.item;
      const { kitchenType } = this.props.item;
      const { websiteUrl } = this.props.item;
      const { facebook } = this.props.item;
      const { mobile } = this.props.item;
      const { latitude } = this.props.item;
      const { longitude } = this.props.item;
      const { restaurant } = this.props.item;
      const { visits } = this.props.item;
      const backgroundColor = this.props.backgroundColor;
      return (
        <TouchableWithoutFeedback
          onPress={this.props.onPress}
        >
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor,
              height: responsiveHeight(30),
              marginBottom: responsiveHeight(0.5),
              paddingLeft: responsiveWidth(3),
              paddingRight: responsiveWidth(3),
              width: responsiveWidth(98)
            }}
          >
            <View style={Styles.cardSection}>
              <View style={Styles.detailsSection}>
                <Text style={Styles.restaurantName}>{restaurantName}</Text>
                <Text style={Styles.restaurantName}>{restaurantArabicName}</Text>
                <Text style={Styles.restaurantName}>{restaurant}</Text>
                <Text style={Styles.restaurantType}>{kitchenType}</Text>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  reversed
                  starSize={responsiveFontSize(2.5)}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                />
                <Text style={Styles.restaurantName}>عدد الزيارات {visits}</Text>
              </View>
              <View style={Styles.lineDivider} />
              <View style={Styles.imageSection}>
                <TouchableOpacity onPress={this.showModal} style={{ flex: 1 }}>
                  <Image
                    resizeMode='stretch'
                    style={Styles.imageStyle}
                    source={{ uri: thumbnail }}
                  />
                </TouchableOpacity>
              </View>
              <Modal isVisible={this.state.isModalVisible}>
                <Card style={{ flex: 0.5 }}>
                  <CardItem>
                    <TouchableOpacity
                      onPress={this.hideModal}
                      style={{ flex: 1, alignItems: 'flex-end' }}
                    >
                      <Icon
                        name='x-square'
                        color='#e62531'
                        size={responsiveFontSize(4)}
                      />
                    </TouchableOpacity>
                  </CardItem>
                  <CardItem cardBody>
                    <View style={Styles.imageModal}>
                      <Image
                        resizeMode='stretch'
                        style={Styles.imageStyle}
                        source={{ uri: thumbnail }}
                      />
                    </View>
                  </CardItem>
                </Card>
              </Modal>
            </View>
            <View style={Styles.cardSection}>
              {this.renderFavoriteIcon()}
              <IconComponent
                iconName='globe'
                iconText='موقع الكتروني'
                iconColor={this.props.iconColor}
                color={this.props.color}
                onIconPress={() => this.handleWebLinking(websiteUrl)}
              />
              <IconComponent
                iconName='facebook'
                color={this.props.color}
                iconText='فيسبوك'
                iconColor={this.props.iconColor}
                onIconPress={() => this.handleWebLinking(facebook)}
              />
              <IconComponent
                iconName='map-pin'
                iconText='على الخارطة'
                iconColor={this.props.iconColor}
                color={this.props.color}
                onIconPress={() => this.handleMapLinking(latitude, longitude)}
              />
              <IconComponent
                iconName='heart'
                iconText='توصيل'
                color={this.props.color}
                iconColor={this.props.iconColor}
              />
              <IconComponent
                iconName='phone'
                color={this.props.color}
                iconText='الهاتف'
                iconColor='#ffffff'
                onIconPress={() => this.handlePhoneCall(mobile)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    return <View />;
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.Authentication.token The returned access token.
 * @param {int[]} state.RestaurantData.restaurantsId The returned restaurantsId state.
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
})(RestaurantItem);
