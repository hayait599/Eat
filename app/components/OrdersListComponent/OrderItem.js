import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Thumbnail } from 'native-base';
import { 
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'; 
import { 
  addItem, 
  removeItem, 
  removeItemFromCart, 
  setTotalCost, 
  setTotalDeliveryCost 
} from './../../actions/index';
import Restaurant from './../../repository/Restaurant';
import Styles from './Styles';

class OrderItem extends Component {
 /**
   * @constructor
   * @param {object} props Used for passing data to the favorite item component
   */
  constructor(props) {
    super(props);
    /**
     * @type {object} 
     * @property {int} restaurantItemId
     */
    this.state = {
      restaurantItem: null,
    };
  }

  componentDidMount() {
    const { restaurantId } = this.props.item;
    this.state.restaurantItem = Restaurant.getRestaurant(restaurantId);
  }
  showrestaurantDetails() { 
    Actions.restaurantDetailsScreen({ id: this.props.item.restaurantId });
  }
  addItem(id) {
    this.props.addItem(id);
    this.props.setTotalCost();
    this.props.setTotalDeliveryCost();
  }
  removeItem(id) {
    this.props.removeItem(id);
    this.props.setTotalCost();
    this.props.setTotalDeliveryCost();
  }
  removeItemFromCart(id) {
    this.props.removeItemFromCart(id); 
    this.props.setTotalCost();
    this.props.setTotalDeliveryCost();
  }
  render() {
    const { id } = this.props.item;
    const { name } = this.props.item;
    const { category } = this.props.item;
    const { price } = this.props.item;
    const { ingredient } = this.props.item;
    const { photo } = this.props.item;
    const { restaurantName } = this.props.item;
    const { quantity } = this.props.item;
    return ( 
      <View>
        <TouchableOpacity onPress={() => this.showrestaurantDetails()}>
            <Text style={Styles.restaurantName}>{restaurantName}</Text>
        </TouchableOpacity>
        <View style={Styles.listItemStyle}>
          <View style={Styles.detailsStyle}>
          <Thumbnail 
            style={Styles.thumbnailStyle} 
            square 
            size={responsiveFontSize(10)} 
            source={{ uri: photo }} 
          />
            <View style={Styles.dishDetail}>
              <Text style={Styles.dishNameStyle}>{name}</Text>
              <Text style={Styles.dishStyle}>{category}</Text>
              <Text style={Styles.dishStyle}>{ingredient}</Text>
            </View>
          </View>
          <View style={Styles.dishExtraInformation}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={Styles.addButton}
              onPress={() => this.removeItem(id)}
            >
              <Icon
                name='minus'
                color='#e30613'
                size={responsiveFontSize(2)}
              />
            </TouchableOpacity>
            <Text style={Styles.numberOfItems}>{quantity}</Text>
            <TouchableOpacity
              style={Styles.addButton}
              onPress={() => this.addItem(id)}
            >
              <Icon
                name='plus'
                color='#e30613'
                size={responsiveFontSize(2)}
              />
            </TouchableOpacity>
            </View>
            <Text style={Styles.dishPriceStyle}>
              NIS {Number(price) * quantity}
            </Text>
            <TouchableOpacity
              style={Styles.removeButton}
              onPress={() => this.removeItemFromCart(id)}
            >
              <Icon
                color='#e30613'
                size={responsiveFontSize(3)}
                name='x'
              />
            </TouchableOpacity>
            <Text style={Styles.dishPriceStyle}>Remove</Text>
            </View>
      
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the Cart store state to the OrderItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.Cart.totalCost The returned totalCost.
 * @returns {int} totalCost
 */
const mapStateToProps = state => {
  return { 
    quantity: state.Cart,
    totalCost: state.Cart.totalCost
  };
};
export default connect(mapStateToProps, { 
  addItem, 
  removeItem, 
  removeItemFromCart, 
  setTotalCost,
  setTotalDeliveryCost 
})(OrderItem);
