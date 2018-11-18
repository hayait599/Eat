import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import {
  setup
} from './../../actions/index';
import Styles from './Styles';

const eatLogo = require('./../../images/EatMainLogo.png');
/**
 * Defines the splash screen Component.
 * 
 * @class SplashScreen
 * @extends {Component}
 */
class SplashScreen extends Component {
  /** 
   * Used to transmit the user to the home screen after finishing the background setups
   *
   * @return Void 
   */
  componentWillMount() {
    let latitude = 0;
    let longitude = 0;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      },
      (error) => { }
    );
    this.props.setup(latitude, longitude, 0.631371);
  }
  /** 
   * Used to clear the timeout handler if it wasn't cleared
   * 
   * @return Void
   */
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  /**
   * Used to render the splash screen component
   * 
   * @returns {ReactElement} SplashScreen component
   */
  render() {
    return (
      <View style={Styles.mainStyle}>
        <View>
          <View style={Styles.headerStyle}>
            <Image source={eatLogo} style={Styles.imageStyle} resizeMode='contain' />
            <View style={Styles.bodyStyle}>
              <Text style={Styles.logoStyle}>الاكبر في البلاد للبحث عن المطاعم و خدماتها </Text>
              <View>
                <Text style={Styles.logoStyle}>مشغل بواسطة</Text>
                <View style={Styles.subLineStyle} />
                <Text style={Styles.logoStyle}>Sinusoidal Labs</Text>
              </View>
            </View>
            <View style={Styles.spinnerStyle} >
              <ActivityIndicator size='large' color='#000000' />
            </View>
          </View>
        </View>
        <View style={Styles.footerStyle}>
          <Text>Platinum sponsor</Text>
          <View style={Styles.lineStyle} />
          <Text>sponsor logo</Text>
        </View>
      </View>
    );
  }
}
export default connect(null, { setup })(SplashScreen);
