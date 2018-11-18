import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { getCDNRoute } from './../../../services/Api';
import {
  addFavoriteOffer,
  removeFavoriteOffer
} from './../../../actions/index';
import Styles from './../Styles';
/**
 * Defines RestaurantPhotoItem component
 * 
 * @class RestaurantPhotoItem
 * @extends {Component}
 */
class RestaurantPhotoItem extends Component {
  /**
   * Used to render photo item component
   * 
   * @returns {ReactElement} OfferItem component
   */
  render() {
    if (this.props.item) {
      const image = this.props.item.image;
      const tilte = this.props.item.image_title;
      const description = this.props.item.discription;
      return (
        <View style={Styles.offersContainer} >
          <Text style={Styles.restaurantName} >
            {tilte}
          </Text>
          <Image
            source={{ uri: getCDNRoute('restPhotos') + image }}
            style={Styles.restaurantImage}
          />
          <Text style={Styles.offerDetailsText} >
            {description}
          </Text>
        </View>
      );
    }
  }
}
/**
 * Used to pass the store state to the RestaurantPhotoItem class.
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
})(RestaurantPhotoItem);
