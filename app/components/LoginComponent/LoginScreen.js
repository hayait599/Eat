import React, { Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {
  LoginForm
} from './index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';
/**
 * Defines the login screen Component.
 * 
 * @class LoginScreen
 * @extends {Component}
 */
class LoginScreen extends Component {
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
        <ScrollView style={{ flex: 1 }}>
          <View style={Styles.container}>
            <LoginForm />
          </View>
        </ScrollView>
      </MenuHeader>
    );
  }
}
export { LoginScreen };

