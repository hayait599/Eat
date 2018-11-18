import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  RegistrationForm
} from './index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';
/**
 * Defines the login screen Component.
 * 
 * @class LoginScreen
 * @extends {Component}
 */
class RegistrationScreen extends Component {
  /**
   * Used to render the login screen component.
   * 
   * @returns {ReactElement} LoginScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <View style={Styles.container}>
          <RegistrationForm />
        </View>
      </MenuHeader>
    );
  }
}
export { RegistrationScreen };

