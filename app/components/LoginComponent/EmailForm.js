import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Prompt from 'react-native-prompt';
import {
  userLogin,
  authLoading,
  authFailed,
  clearMessages,
  forgotPassword
} from './../../actions/index';
import Styles from './Styles';

const login = require('./../../images/Login.png');
/**
 * Defines the email form component for the login screen.
 * 
 * @class EmailForm
 * @extends {Component}
 */
class EmailForm extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data throw the class component.
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {string} email Defines the entered email.
     * @property {string} password Defines the entered passwor.
     */
    this.state = {
      email: '',
      password: '',
      promptVisible: false
    };
  }
  /**
  * Called when the component is about to mount
  * Used to clear error messages
  * 
  * @returns Void
  */
  componentDidMount() {
    this.props.clearMessages();
    this.props.authLoading(false);
  }
  /**
   * Called when the component is about to unmount
   * Used to clear error messages
   * 
   * @returns Void
   */
  componentWillUnmount() {
    this.props.clearMessages();
    this.props.authLoading(false);
  }
  /**
   * Called when the login button is pressed
   * calles the userLogin and authLoading actions.
   * 
   * @returns Void
   */
  onLoginPressed() {
    if (!this.props.accsessToken) {
      this.props.authLoading(true);
      this.props.userLogin({
        email: this.state.email,
        password: this.state.password
      });
    } else {
      return Alert.alert('', 'Please logout first');
    }
  }
  /**
   * Used to show an error message if the email login failed.
   * 
   * @returns {ReactElement} Text component.
   * @returns {ReactElement} Empty text component. 
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
    if (this.props.loading && !this.props.accsessToken) {
      return (
        <View style={Styles.loadingIcon} >
          <ActivityIndicator size='large' color='#000000' />
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.onLoginPressed()}>
        <Image
          style={Styles.iconStyle}
          source={login}
          resizeMode='contain'
        />
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
      <View style={Styles.emailForm} >
        {this.loadingRender()}
        <Text style={Styles.emailText}>اسم المستخدم</Text>
        <TextInput
          style={Styles.emailInput}
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />
        <Text style={Styles.emailText}>كلمة المرور</Text>
        <TextInput
          style={Styles.emailInput}
          underlineColorAndroid='transparent'
          secureTextEntry
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />
        <TouchableOpacity onPress={() => this.setState({ promptVisible: true })} >
          <Text style={Styles.infoText}> استعادة كلمة المرور</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.registrationScreen()} >
          <Text style={Styles.infoText}>انشاء حساب</Text>
        </TouchableOpacity>
        {this.failedRender()}
        <Prompt
          title='الرجاء ادخال البريد الالكتروني'
          placeholder="Email"
          visible={this.state.promptVisible}
          onCancel={() => this.setState({
            promptVisible: false
          })}
          onSubmit={(value) => this.props.forgotPassword(value)}
        />
        <View style={Styles.horizontalLine} />
      </View>
    );
  }
}
/**
 * Used to pass the authentication store state to the EmailForm class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.Authentication.loading The returned loading.
 * @param {object} state.Authentication.error The returned errors.
 * @returns {boolean} loading
 * @returns {string} error
 */
const mapStateToProps = state => {
  return {
    loading: state.Authentication.loading,
    accsessToken: state.Authentication.token,
    error: state.Authentication.error
  };
};
export default connect(mapStateToProps, {
  userLogin,
  authLoading,
  authFailed,
  clearMessages,
  forgotPassword
})(EmailForm);
