import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { OnlineOrderDetails } from './index';
import {
  getLocations,
  getKitchenTypes
} from './../../actions/index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';
/**
 * Defines OnlineOrderScreen class.
 * 
 * @class OnlineOrderScreen
 * @extends {Component}
 */
class OnlineOrderScreen extends Component {
  /**
   * Used to get all restaurants locations and kitchen types
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.getLocations();
    this.props.getKitchenTypes();
  }
  /**
   * Used to render the online order screen component.
   * 
   * @returns {ReactElement} OnlineOrderScreen component
   */
  render() {
    return (
      <MenuHeader 
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <OnlineOrderDetails />
      </MenuHeader>
    );
  }
}
export default connect(null, {
  getLocations,
  getKitchenTypes
})(OnlineOrderScreen);
