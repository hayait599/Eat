import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Router from './app/config/Router';
import configureStore from './app/config/ConfigureStore';

export default class EatApp extends Component {
  /**
   * Called when the component is mounted
   * Used to set an event listener for  hardware BackPress
   * 
   * @returns Void
   */
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }
  /**
   * Called when the component will unmount
   * Used to remove the event listener for hardware BackPress
   * 
   * @returns Void
   */
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }
  /**
   * Used to manage the back button press navigation
   * 
   * @returns {Boolean}
   */
  backAndroid() {
    if (Actions.currentScene === 'homeScreen') {
      BackHandler.exitApp();
      return false;
    } else if (Actions.currentScene === 'splashScreen') {
      BackHandler.exitApp();
      return false;
    } else {
      Actions.pop();
      return true;
    }
  }
  /**
   * Used to render the App screens and Components.
   * 
   * @returns {ReactComponent}
   */
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
