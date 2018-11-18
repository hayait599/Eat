import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setUserName } from './../../actions/index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import {
  FavoriteSection,
  SharingSection
} from './index';

/**
 * Defines profile screen component
 * @class ProfileScreen
 * @extends {Component}
 */
class ProfileScreen extends Component {
  /**
   * Called when the back button is pressed.
   * navigates the user to the home screen if an access token
   * exists and the previous screen was the login screen.
   * 
   * @returns Void
   */
  componentWillMount() {
    if (this.props.userName) {
      this.props.setUserName(this.props.userName);
    }
  }
  /**
   * Called when the back button is pressed
   * 
   * @returns Void
   */
  onBackPress() {
    if (this.props.navBack === false) {
      return Actions.homeScreen();
    }
    return Actions.pop();
  }
  /**
   * Used to render profile screen component.
   * 
   * @returns {ReactElement}  component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => this.onBackPress()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <ScrollView>
          <FavoriteSection />
          <SharingSection />
        </ScrollView>
      </MenuHeader>
    );
  }
}
export default connect(null, { setUserName })(ProfileScreen);
