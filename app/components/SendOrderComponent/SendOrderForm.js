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
  clearMessages,
  sendOrder
} from './../../actions/index';
import User from './../../repository/User';
import Styles from './Styles';
/**
 * Defines the SendOrderForm component.
 * 
 * @class SendOrderForm
 * @returns {ReactElement} SendOrderForm component
 */
class SendOrderForm extends Component {
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
      order: '',
      mobile: '',
      address: '',
      id: User.getUserId()
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
  onSubmitPressed() {
    const order = {
      address: this.state.address,
      mobile: this.state.mobile,
      dishes: this.props.orderedDishes,
      id: this.state.id
    };
    const validate = this.props.accsessToken.length > 0 &&
      this.state.address.length > 0 && this.state.mobile.length > 0;
    if (this.props.accsessToken) {
      if (validate) {
        if (this.props.orderedDishes.length > 0) {
          this.props.sendOrder(order);
        } else {
          Alert.alert('', 'Your orders list is currently empty');
        }
      } else {
        Alert.alert('', 'Please fill the required fields');
      }
    } else {
      Alert.alert('', 'Please login to continue');
    }
  }
  /**
   * Used to show an error message if the email login faild.
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
    if (this.props.loading) {
      return (
        <View style={Styles.loadingIcon} >
          <ActivityIndicator size='large' color='#e62531' />
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.onSubmitPressed()}>
        <View style={Styles.emailButton}>
          <Text style={Styles.emailButtonText}>ارسل طلبك الان</Text>
        </View>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the send order form component.
   * 
   * @returns {ReactElement} SendOrderForm component
   */
  render() {
    return (
      <View style={Styles.registrationForm} >
        <View style={Styles.emailForm} >
          <Text style={Styles.emailText}>رقم الهاتف</Text>
          <TextInput
            style={Styles.emailInput}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
            onChangeText={(text) => this.setState({ mobile: text })}
            value={this.state.mobile}
          />
          <Text style={Styles.emailText}>العنوان</Text>
          <TextInput
            style={Styles.emailInput}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ address: text })}
            value={this.state.address}
          />
          {this.loadingRender()}
          {this.failedRender()}
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the authentication store state to the SendOrderForm class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    loading: state.Authentication.loading,
    error: state.Authentication.error,
    accsessToken: state.Authentication.token
  };
};
export default connect(mapStateToProps, {
  userSignup,
  authLoading,
  authFailed,
  clearMessages,
  sendOrder
})(SendOrderForm);
