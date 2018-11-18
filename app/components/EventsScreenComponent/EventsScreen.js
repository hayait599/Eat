import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  getEvents
} from './../../actions/index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { EventList } from './index';

/**
 * Defines events screen component.
 * 
 * @class EventsScreen
 * @extends {Component}
 */
class EventsScreen extends Component {
  /**
   * Called when the component is about to mount
   * Used to make getAllEvents API request
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.getEvents();
  }
  /**
   * Used to render events screen component.
   * 
   * @returns {ReactElement}  component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        firstIconName='shopping-cart'
      >
        <EventList />
      </MenuHeader>
    );
  }
}
export default connect(null, {
  getEvents
})(EventsScreen);
