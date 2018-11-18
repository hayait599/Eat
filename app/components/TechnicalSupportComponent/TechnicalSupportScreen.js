import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { phonecall, email } from 'react-native-communications';
import { FACEBOOK_ID, EMAIL, PHONE_NUMBER } from './../../constants/Strings';
import
MenuHeader
  from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';

const messageIcon = require('./../../images/ContactMessages.png');
const coloredIcon = require('./../../images/ContactMessages2.png');
const whatsApp = require('./../../images/WhatsApp.png');
const messenger = require('./../../images/Messenger.png');
const sendMessage = require('./../../images/SendMessage.png');
const phone = require('./../../images/PhoneApp.png');
/**
 * Defines the SettingsScreen Component.
 * 
 * @class SettingsScreen
 * @extends {Component}
 */
class TechnicalSupportScreen extends Component {
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
      text: '',
    };
  }
  /**
   * Used to send an email with a body
   * 
   * @returns Void
   */
  sendTextEmail() {
    email([EMAIL], null, null, null, this.state.text);
  }
  /**
   * Used to send an email
   * 
   * @returns Void
   */
  sendEmail() {
    email([EMAIL], null, null, null, null);
  }
  /**
   * Used to open the mobile dial.
   * 
   * @returns Void
   */
  handlePhoneCall = () => {
    phonecall(PHONE_NUMBER, true);
  }
  /**
   * Used to open the mobile whatsApp.
   *  
   * @returns Void
   */
  openWhatsApp() {
    Linking.openURL('whatsapp://send?phone=' + PHONE_NUMBER);
  }
  /**
   * Used to open the mobile messenger.
   *  
   * @returns Void
   */
  openMessenger() {
    Linking.openURL('fb://messaging/' + FACEBOOK_ID);
  }
  /**
   * Used to render the settings screen component
   * 
   * @returns {ReactElement} TechnicalSupportScreen component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
          <View style={Styles.mainStyle}>
            <View>
              <View style={Styles.headerStyle}>
                <Image source={messageIcon} style={Styles.imageStyle} resizeMode='contain' />
                <Text style={Styles.logoStyle}> يسعدنا سماع رايك</Text>
                <Text style={Styles.logoStyle}>We are happy to hear from you</Text>
              </View>
              <View style={Styles.bodyStyle}>
                <Text style={Styles.logoStyle}>
                  نحن في اكل و شرب سنكون سعداء بمعرفةارائكم و اقتراحاتكم
                  يمكنكم ارسال ارائكم و اقتراحاتكم عبر الحقل ادناه
                </Text>
                <TextInput
                  multiline
                  numberOfLines={4}
                  blurOnSubmit={false}
                  style={Styles.textInput}
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.password}
                />
                <TouchableOpacity onPress={() => this.sendTextEmail()}>
                  <Image source={coloredIcon} style={Styles.imageStyle} resizeMode='contain' />
                  <Text style={Styles.logoStyle}>ارسل الان</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.bodyStyle}>
                <Text style={Styles.logoStyle}>
                  او من خلال الوسائط المتاحة ادناه
                </Text>
                <View style={Styles.iconsBar} >
                  <TouchableOpacity onPress={() => this.openWhatsApp()}>
                    <Image source={whatsApp} style={Styles.shareImageStyle} resizeMode='contain' />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.openMessenger()}>
                    <Image source={messenger} style={Styles.shareImageStyle} resizeMode='contain' />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.sendEmail()}>
                    <Image 
                      source={sendMessage}
                      style={Styles.shareImageStyle} 
                      resizeMode='contain' 
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.handlePhoneCall()}>
                    <Image source={phone} style={Styles.shareImageStyle} resizeMode='contain' />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </MenuHeader>
    );
  }
}
export default connect(null)(TechnicalSupportScreen);
