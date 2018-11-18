import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Thumbnail } from 'native-base';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { addItemToCart } from './../../../actions/index';
import { getCDNRoute } from './../../../services/Api';
import Styles from './../Styles';
/**
 * Defines MenuItem class .
 * 
 * @class MenuItem
 * @extends {Component}
 */
class MenuItem extends Component {
  /**
   * Used to add an item to the cart state.
   * 
   * @returns Void
   */
  addToCart() {
    const addedItemsId = this.props.cart.addedItems.map(item => item.id);
    const check = addedItemsId.includes(this.props.item.id);
    if (!check) {
      const item = {
        id: this.props.item.id,
        name: this.props.item.ename,
        price: this.props.item.price,
        ingredient: this.props.item.dish_ingradint,
        photo: this.props.item.dishImage_thump,
        availability: this.props.item.active,
        restaurantName: this.props.restaurantItem.restaurantName,
        restaurantId: this.props.restaurantItem.id,
        quantity: 1,
        deliveryCost: this.props.restaurantItem.deliveryCost
      };
      this.props.addItemToCart(item);
    }
    if (check) {
      Alert.alert('', 'this item is already added to cart');
    }
  }
  /**
   * Used to render the menu list item component
   * 
   * @returns {ReactElement} ListItem component
   */
  render() {
    //variable names as stored in the DB
    const { id } = this.props.item;
    const { ename } = this.props.item;
    const { dish_ingradint } = this.props.item;
    const { price } = this.props.item;
    const { active } = this.props.item;
    const { dishImage_thump } = this.props.item;

    return (
      <View style={Styles.listItemStyle}>
        <View style={Styles.detailsStyle}>
          <Thumbnail
            style={Styles.thumbnailStyle}
            square
            size={responsiveFontSize(9)}
            source={{ uri: getCDNRoute() + dishImage_thump }}
          />
          <View style={Styles.dishDetail}>
            <Text style={Styles.dishNameStyle}>{ename}</Text>
            <Text style={Styles.dishStyle}>{dish_ingradint}</Text>
          </View>
        </View>
        <View style={Styles.dishExtraInformation}>
          <Text style={Styles.dishStateStyle}>
            {(active === 1) ? 'Availabile' : 'Not availabile'}
          </Text>
          <Text style={Styles.dishPriceStyle}>NIS {price}</Text>
          <TouchableOpacity
            style={Styles.addButton}
            onPress={() => this.addToCart()}
          >
            <Icon
              color='#e30613'
              size={responsiveFontSize(3)}
              name='shopping-cart'
            />
          </TouchableOpacity>
          <Text style={Styles.dishPriceStyle}>Add to cart</Text>
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the MenuItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object[]} state.Cart The returned cart state.
 * @param {object[]} state.SearchedData.restaurantItem.restaurant 
 *   The returned restaurant state
 * @returns {Object[]} props
 */
const mapStateToProps = state => {
  return {
    cart: state.Cart,
    restaurantItem: state.SearchedData.restaurantItem.restaurant,
  };
};
export default connect(mapStateToProps, { addItemToCart })(MenuItem);
