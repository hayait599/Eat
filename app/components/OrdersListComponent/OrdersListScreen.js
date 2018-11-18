import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { OrderList } from './index';
import Styles from './Styles';

const useIcon = require('./../../images/UseIcon.png');

/**
 * Defines the OrdersListScreen class
 * 
 * @class OrdersListScreen
 * @extends {Component}
 */
class OrdersListScreen extends Component {
  /**
   * Used to render the orders list screen
   * 
   * @returns {ReactElement} OrdersListScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <View style={Styles.content}>
          <View style={Styles.contentDetails}>
              <Image
                style={Styles.headerIcon}
                source={useIcon}
                resizeMode='contain'
              />
              <Text style={Styles.titleText} >{this.props.userInfo}</Text>
              <Text style={Styles.titleText}>تنفيذ طلب الطعام</Text>
              <Text style={Styles.titleText}>Place your order</Text>
          </View>
          <View style={Styles.ordersListStyle}>
            <OrderList />  
          </View>
        </View>
      </MenuHeader>
    );
  }
}
/**
 * Used to pass the Cart store state to the OrdersListScreen class.
 * 
 * @param {object} state The redux store state.
 * @param {int} state.Cart.totalCost The returned totalCost.
 * @returns {int} totalCost
 */
const mapStateToProps = state => {
  return { 
    userInfo: state.Authentication.userInfo,
    totalCost: state.Cart.totalCost,
  };
};
export default connect(mapStateToProps)(OrdersListScreen);
