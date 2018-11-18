import React, { Component } from 'react';
import {
  Text,
  View,
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
import {
  addFavorite,
  removeFavorite,
  storeEvaluation,
  addRatedRestaurants
} from './../../actions/index';
import { getCDNRoute } from './../../services/Api';
import Styles from './Styles';
/**
 * Used to define the RestauranMenuDetailstItem class
 * 
 * @class RestauranMenuDetailstItem
 * 
 * @returns {ReactElement} RestauranMenuDetailstItem component
 */
class RestauranMenuDetailstItem extends Component {
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
})(RestauranMenuDetailstItem);
