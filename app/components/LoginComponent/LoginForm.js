import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import EmailForm from './EmailForm';
import FacebookForm from './FacebookForm';
import Styles from './Styles';
/**
 * Defines the login screen Component.
 * 
 * @class LoginScreen
 * @extends {Component}
 */
class LoginForm extends Component {
  /**
   * Used to render the login screen component.
   * 
   * @returns {ReactElement} LoginScreen component
   */
  render() {
    return (
      <View>
        <View style={Styles.loginForm}>
          <EmailForm />
          <FacebookForm />
          <View style={Styles.footer}>
            <Text style={Styles.footerText}>اتفاقية و شروط الاستخدام </Text>
            <View style={Styles.horizontalLine} />
            <Text style={Styles.infoFooterText}>منطقة اعلانات تجارية </Text>
          </View>
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.Authentication.token The returned access token.
 * @returns accsessToken props
 */
const mapStateToProps = state => {
  return {
    AdvertisementImages: state.AdvertisementImages.loginScreen.ad_image
  };
};
export default connect(mapStateToProps)(LoginForm);

