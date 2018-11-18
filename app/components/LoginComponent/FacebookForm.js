import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { 
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  
  authLoading,
  authFailed,
  facebookLogin
} from './../../actions/index';
import Styles from './Styles';
/**
 * Defines the Facebook form component for the login screen.
 * 
 * @class FacebookForm
 * @extends {Component}
 */
class FacebookForm extends Component {

  /**
   * When clicking the facebook button
   * Login by facebook
   * 
   * @returns Void
   */
  loginByFacebook() {
    if (!this.props.accsessToken) {
      this.props.facebookLogin();
    } else {
      return Alert.alert('', 'Please logout first');
    }
  }
  /**
   * Used to render the Facebook form component.
   * 
   * @returns {ReactElement} FacebookForm component
   */ 
  render() {
    return (
     <TouchableOpacity onPress={() => this.loginByFacebook()}>
        <View style={Styles.facebookButton}>
          <Text style={Styles.facebookText}>
            facebook login
          </Text>
          <Icon
            name='facebook'
            color='#ffffff'
            size={responsiveFontSize(7)}
          />
        </View>
      </TouchableOpacity>
    );
  } 
}
/**
 * Used to pass the Authentication state to the FacebookForm class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.Authentication.error The returned errors.
 * @returns error props
 */
const mapStateToProps = state => {
  return { 
    error: state.Authentication.error,
    accsessToken: state.Authentication.token
  };
};
export default connect(mapStateToProps, { facebookLogin, authLoading, authFailed })(FacebookForm);
