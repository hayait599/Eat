import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Alert
} from 'react-native';
import Switch from 'react-native-material-switch';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  settingsOption
} from './../../actions/index';
import
MenuHeader
  from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';

const settings = require('./../../images/Settings.png');
const warning = require('./../../images/OfferScreen/Warning.png');

/**
 * Defines the SettingsScreen Component.
 * 
 * @class SettingsScreen
 * @extends {Component}
 */
class SettingsScreen extends Component {
  /**
   * Called when the switch state changes
   * 
   * @param {boolean} state 
   * 
   * @returns Void
   */
  onSwitchPress(state) {
    if (this.props.accsessToken) {
      if (this.props.accsessToken.length > 0) {
        this.props.settingsOption(state);
      } else {
        Alert.alert('', 'Please login to enable notifications');
      }
    } else {
      Alert.alert('', 'Please login to enable notifications');
    }
  }
  /**
   * Used to render the settings screen component
   * 
   * @returns {ReactElement} SplashScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <View style={Styles.mainStyle}>
          <View>
            <View style={Styles.headerStyle}>
              <Image source={settings} style={Styles.imageStyle} resizeMode='contain' />
              <Text style={Styles.logoStyle}> الاعدادت</Text>
              <Text style={Styles.logoStyle}>Settings</Text>
            </View>
            <View style={Styles.bodyStyle}>
              <Text style={Styles.logoStyle}>
                تساعدكم لوحة الاعدادات في ايقاف او تشفيل الاشعارات الصادرة
                عن تطبيق اكل و شرب حسب رغبتكم وفيمكنكم ايقاف الاشعارات او تشغيلها لكل المطاعم
                او لمطعم معين
              </Text>
            </View>
            <View style={Styles.bodyStyle}>
              <Text style={Styles.logoStyle}>
                لايقاف او تشغيل جميع الاشعارات الصادرة عن تطبيق اكل و شرب
               </Text>
              <Switch
                onChangeState={(state) => this.onSwitchPress(state)}
                activeBackgroundColor='#3C3C3B'
                inactiveBackgroundColor='#849594'
                activeButtonColor='#95C11F'
                activeButtonPressedColor='#C8CAC8'
                inactiveButtonColor='#C8CAC8'
                inactiveButtonPressedColor='#95C11F'
                active={this.props.nofications}
              />
            </View>
            <View style={Styles.bodyStyle}>
              <Image source={warning} style={Styles.subImageStyle} resizeMode='contain' />
              <Text style={Styles.logoSubStyle}>
                لايقاف الاشعارات المرسلة عزيزي المستخدم
                الرجاء التوجه لصفحة المطعم لايقاف اشعاراته
              </Text>
            </View>
          </View>
        </View>
      </MenuHeader>

    );
  }
}
/**
 * Used to pass the authentication store state to the EmailForm class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    nofications: state.Authentication.notifications,
    accsessToken: state.Authentication.token
  };
};
export default connect(mapStateToProps, { settingsOption })(SettingsScreen);
