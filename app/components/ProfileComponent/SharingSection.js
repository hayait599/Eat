import React, { Component } from 'react';
import { 
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Share from 'react-native-share';
import {
  ShareButton
} from './index';
import { 
  clearAceessToken,
  userLogout
} from './../../actions/index';
import User from './../../repository/User';
import Styles from './Styles';

const backIcon = require('./../../images/BackIcon.png');
const messageIcon = require('./../../images/MessageIcon.png');
const logoutIcon = require('./../../images/LogoutIcon2.png');
const adv2 = require('./../../images/Adv2.png');
/**
 * Defines the sharing section component for the profile screen component.
 * 
 * @class SharingSection
 * @returns {ReactElement} SharingSection component
 */
class SharingSection extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data throw the class component.
   */
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  /**
   * Used to hide the sharing bar
   * 
   * @returns Void
   */
  onCancel() {
    this.setState({ visible: false });
  }
  /**
   * Used to show the sharing bar
   * 
   * @returns Void
   */
  onOpen() {
    this.setState({ visible: true });
  }
  /**
   * Used to dispatch the userLogout action 
   * and log the user out.
   * 
   * @returns Void
   */ 
  logOut() {
    User.deleteAll();
    this.props.userLogout();
  }
  /**
   * Used to render sharing sectioncomponent.
   * 
   * @returns {ReactElement} SharingSection component
   */ 
  render() {
    const shareOptions = {
      title: 'Eatps',
      message: 'Eatps',
      url: 'https://eat.ps/',
      subject: 'Eatps'
    };
    return (
      <View style={Styles.container}>
        <View style={Styles.horizontalLine} />
        <ShareButton
          iconName={backIcon}
          firstDescription='مشاركة البرنامج مع الاصدقاء'
          onPress={() => { Share.open(shareOptions); }}
        />
        <ShareButton
          iconName={messageIcon}
          firstDescription='يسعدنا سماع رأيك'
          onPress={() => Actions.technicalSupportScreen()}
        />
        <ShareButton
          iconName={logoutIcon}
          firstDescription='تسجيل الخروج'
          onPress={() => this.logOut()}
        />
        <View style={Styles.horizontalLine} />
        <ShareButton
          iconName={adv2}
          firstDescription='منطقة اعلانات تجارية'
        />
      </View>
    );
  }
}
/**
 * Used to pass the reducer's state to the SharingSection class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.Authentication.token The returned access token.
 * @returns loggedout props
 */
const mapStateToProps = state => {
  return { 
    loggedout: state.Authentication.token,
  };
};
export default connect(mapStateToProps, { clearAceessToken, userLogout })(SharingSection);

