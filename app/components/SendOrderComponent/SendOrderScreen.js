import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  SendOrderForm
} from './index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';
/**
 * Defines the SendOrderScreen Component.
 * 
 * @class SendOrderScreen
 * @extends {Component}
 */
class SendOrderScreen extends Component {
  /**
   * Used to render the SendOrderScreen component.
   * 
   * @returns {ReactElement} SendOrderScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <View style={Styles.container}>
          <SendOrderForm orderedDishes={this.props.orderedDishes} />
        </View>
      </MenuHeader>
    );
  }
}
export default SendOrderScreen;
