import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  Alert,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import StarRating from 'react-native-star-rating';
import {
  Thumbnail,
  Tab,
  Tabs
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { web, phonecall } from 'react-native-communications';
import RestaurantItem from './../../utils/Componenets/RestaurantItem/RestaurantItem';
import { getCDNRoute } from './../../services/Api';
import {
  storeEvaluation,
  addRatedRestaurants,
  getRelatedDishes
} from './../../actions/index';
import { IconComponent } from './../../utils/Componenets/RestaurantItem/IconComponent';
import Styles from './Styles';

const NIS = require('./../../images/NIS.png');
/**
 * Defines dish information component.
 * 
 * @class DishInformation
 * @extends {Component}
 */
class DishInformation extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data throw the class component.
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
    */
    this.state = {
      starCount: 0,
    };
  }
  /**
   * Called when the component is about to mount
   * Used to set the rating stars count.
   * 
   * @returns Void
   */
  componentDidMount() {
    if (this.props.dish) {
      this.setState({ starCount: this.props.dish.rating });
    }
  }
  /** 
   * Used to set the value of starCount to the number of clicked rating stars.
   * 
   * @param rating The number of selected stars.
   * 
   * @returns Void
   */
  onStarRatingPress(rating) {
    const isRated = this.props.ratedIds.includes(this.props.dish.restaurantsId);
    if (isRated) {
      Alert.alert(' ', 'This restaurant is already rated');
    } else {
      this.setState({
        starCount: rating
      });
      this.props.addRatedRestaurants(this.props.dish.restaurantsId);
      this.props.storeEvaluation(this.props.dish.restaurantsId, rating);
    }
  }
  /** 
   * Used to open the restaurant website in the browser.
   * 
   * @param {string} url the restaurant website url
   * 
   * @return void
   */
  handleWebLinking = (url) => {
    if (url) {
      web(url);
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
   * Used to render the about dish tab
   * 
   * @param {object} dish 
   * 
   * @returns {ReactElement} 
   */
  renderAboutSection() {
    if (this.props.dish) {
      return (
        <ScrollView>
          <View style={Styles.section}>
            <Text style={Styles.sectionText}>{this.props.dish.mainMenuArabic}</Text>
            <Text style={Styles.sectionText}>{this.props.dish.category}</Text>
            <Icon
              name='arrow-down'
              color='#E71D73'
              size={responsiveFontSize(5)}
            />
            <Text style={Styles.sectionText}>{this.props.dish.dishArabicName}</Text>
            <Text style={Styles.sectionText}>{this.props.dish.dishName}</Text>
            <Text style={Styles.itemSectionText}>
              {(this.props.dish.active === 1) ? 'متوفر' : 'غير متوفر'}
            </Text>
            <Text style={Styles.subSectionText}>معلومات عن الطبق</Text>
            <Text style={Styles.subSectionText}>{this.props.dish.ingredient}</Text>
            <View style={Styles.subSection}>
              <Image
                source={NIS}
                style={Styles.iconStyle}
                resizeMode='contain'
              />
              <Text style={Styles.priceSectionText}>
                {this.props.dish.price}
              </Text>
            </View>
            <View style={Styles.iconBar}>
              <IconComponent
                iconName='globe'
                iconText='موقع الكتروني'
                iconColor='#ffffff'
                color='#575756'
                onIconPress={() => this.handleWebLinking(this.props.dish.websiteUrl)}
              />
              <IconComponent
                iconName='facebook'
                iconText='فيسبوك'
                iconColor='#ffffff'
                color='#575756'
                onIconPress={() => this.handleWebLinking(this.props.dish.facebook)}
              />
              <IconComponent
                iconName='map-pin'
                iconText='على الخارطة'
                iconColor='#ffffff'
                color='#575756'
                onIconPress={() => this.handleMapLinking(
                  this.props.dish.latitude,
                  this.props.dish.longitude
                )}
              />
              <IconComponent
                iconName='heart'
                iconText='لدينا توصيل'
                iconColor='#ffffff'
                color='#575756'
              />
              <IconComponent
                iconName='phone'
                iconText='الهاتف'
                color='#575756'
                iconColor='#ffffff'
                onIconPress={() => this.handlePhoneCall(this.props.dish.mobile)}
              />
            </View>
          </View>
        </ScrollView>
      );
    }
  }
  /**
   * render related dishes tab
   * 
   * @returns {ReactElement}
   */
  renderRelatedDishes() {
    if (this.props.relatedDishes && this.props.dish) {
      if (this.props.relatedDishes.length > 0) {
        return (
          <View style={Styles.relatedDishesList}>
            <Text style={Styles.sectionText}>{this.props.dish.mainMenuArabic}</Text>
            <Text style={Styles.sectionText}>{this.props.dish.category}</Text>
            <Icon
              name='arrow-down'
              color='#E71D73'
              size={responsiveFontSize(5)}
            />
            <FlatList
              data={this.props.relatedDishes}
              keyExtractor={(item) => item.dishId}
              renderItem={({ item }) => this.renderFlatListItem(item)}
            />
          </View>
        );
      }
    }
    return (
      <View style={Styles.relatedDishesList}>
        <Text>لا يوجد اطباق مشابهة </Text>
      </View>
    );
  }
  /**
   * Used to render the dishes list item component.
   * 
   * @returns {ReactElement} RestaurantItem component
   */
  renderFlatListItem(item) {
    const dishId = item.dishId;
    return (
      <RestaurantItem
        color='#575756'
        iconColor='#ffffff'
        backgroundColor='#ffffff'
        removeFav
        item={item}
        onPress={() => Actions.dishDetailsScreen({ dishId })}
      />
    );
  }
  /**
   * Used to render profile screen component.
   *
   * @returns {ReactElement}  component
   */
  render() {
    let relatedDishesCount;
    if (this.props.loading) {
      return (
        <View style={Styles.spinnerStyle} >
          <ActivityIndicator size='large' color='#000000' />
        </View>
      );
    } else if (this.props.dish) {
      if (this.props.relatedDishes) {
        relatedDishesCount = '  اطباق مشابهة' + this.props.relatedDishes.length;
      }
      const { restaurantsId } = this.props.dish;
      const { photo } = this.props.dish;
      const { restaurantName } = this.props.dish;
      const { restaurantArabicName } = this.props.dish;
      const { image } = this.props.dish;
      const { kitchenType } = this.props.dish;
      return (
        <View style={Styles.container}>
          <View style={Styles.itemContainer}>
            <TouchableOpacity 
              onPress={() => Actions.restaurantDetailsScreen({ id: restaurantsId })}
            >
              <Thumbnail
                large
                source={{ uri: getCDNRoute('dishPhoto') + image }}
              />
            </TouchableOpacity>
            <Text style={Styles.itemText} >{restaurantArabicName}</Text>
            <Text style={Styles.subItemText} >{restaurantName}</Text>
            <Text style={Styles.subItemText} >{kitchenType}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              reversed
              starSize={responsiveFontSize(2.5)}
              starColor='#008D36'
              rating={this.props.dish.rating}
            />
          </View>
          <Tabs initialPage={1}>
            <Tab
              activeTabStyle={Styles.activeTabStyle}
              activeTextStyle={Styles.activeTextStyle}
              tabStyle={Styles.tabStyle}
              textStyle={Styles.tabTextStyle}
              heading='عن الطبق'
            >
              {this.renderAboutSection()}
            </Tab>
            <Tab
              activeTabStyle={Styles.activeTabStyle}
              activeTextStyle={Styles.activeTextStyle}
              tabStyle={Styles.tabStyle}
              textStyle={Styles.tabTextStyle}
              heading={relatedDishesCount}
            >
              {this.renderRelatedDishes()}
            </Tab>
          </Tabs>
        </View>
      );
    }
    return <View />;
  }
}
/**
 * Used to pass the store state to the DishInformation class.
 *
 * @param {object} state The redux store state.
 * 
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    dish: state.SearchedData.dishItem,
    relatedDishes: state.RestaurantData.relatedDishes,
    ratedIds: state.RestaurantData.ratedRestaurants,
    loading: state.SearchedData.loading
  };
};
export default connect(mapStateToProps, {
  storeEvaluation,
  addRatedRestaurants,
  getRelatedDishes
})(DishInformation);
