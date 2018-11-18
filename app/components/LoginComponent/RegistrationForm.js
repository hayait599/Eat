import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import {
  userSignup,
  authLoading,
  authFailed,
  clearMessages
} from './../../actions/index';
import Styles from './Styles';
/**
 * Defines the email form component for the login screen.
 * 
 * @class RegistrationForm
 * @returns {ReactElement} RegistrationForm component
 */
class RegistrationForm extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data throw the class component.
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     */
    this.state = {
      email: '',
      password: '',
      userName: '',
      mobile: '',
    };
  }
  /**
   * Called when the component is about to mount
   * Used to clear error messages
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.clearMessages();
  }
  /**
   * Called when the component is about to unmount
   * Used to clear error messages
   * 
   * @returns Void
   */
  componentWillUnmount() {
    this.props.clearMessages();
  }
  /**
   * Called when the login button is pressed
   * calles the userLogin and authLoading actions.
   * 
   * @returns Void
   */
  onSignupPressed() {
    if (!this.props.accsessToken) {
      this.props.authLoading(true);
      this.props.userSignup({
        email: this.state.email,
        password: this.state.password,
        mobile: this.state.mobile,
        userName: this.state.userName
      });
    } else {
      return Alert.alert('', 'please logout first');
    }
  }
  /**
   * Used to show an error message if the email login faild.
   * 
   * @returns {ReactElement} Text component.
   */
  failedRender() {
    if (this.props.error) {
      return (
        <Text style={Styles.errorText}>{this.props.error}</Text>
      );
    }
    return (
      <Text style={Styles.emptyView} />
    );
  }
  /**
   * Used to show an activity indicator while the access token is being fetched.
   * 
   * @returns {ReactElement} login button component.
   * @returns {ReactElement} activity indicator component. 
   */
  loadingRender() {
    if (this.props.loading) {
      return (
        <View style={Styles.loadingIcon} >
          <ActivityIndicator size='large' color='#e62531' />
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.onSignupPressed()}>
        <View style={Styles.emailButton}>
          <Text style={Styles.emailButtonText}>تسجيل حساب</Text>
        </View>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the email form component.
   * 
   * @returns {ReactElement} EmailForm component
   */
  render() {
    return (
      <View style={Styles.registrationForm} >
        <View style={Styles.emailForm} >
          <Text style={Styles.emailText}>اسم المستخدم </Text>
          <TextInput
            style={Styles.emailInput}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ userName: text })}
            value={this.state.userName}
          />
          <Text style={Styles.emailText}>رقم الهاتف</Text>
          <TextInput
            style={Styles.emailInput}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ mobile: text })}
            keyboardType='numeric'
            value={this.state.mobile}
          />
          <Text style={Styles.emailText}>الايميل</Text>
          <TextInput
            style={Styles.emailInput}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <Text style={Styles.emailText}>كلمة السر</Text>
          <TextInput
            style={Styles.emailInput}
            underlineColorAndroid='transparent'
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />
          {this.loadingRender()}
          {this.failedRender()}
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the authentication store state to the EmailForm class.
 * 
 * @param {object} state The redux store state.
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    loading: state.Authentication.loading,
    accsessToken: state.Authentication.token,
    error: state.Authentication.error
  };
};
export default connect(mapStateToProps, {
  userSignup,
  authLoading,
  authFailed,
  clearMessages
})(RegistrationForm);
