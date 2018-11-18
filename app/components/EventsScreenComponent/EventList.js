import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { EventsItem } from './index';
import Styles from './Styles';

const events = require('./../../images/Events.png');
/**
 * Defines EventList component
 * 
 * @class EventList
 * @extends {Component}
 */
class EventList extends Component {
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
      selectedTab: 0
    };
  }
  /**
   * Used to render the events list item component.
   * 
   * @returns {ReactElement} EventsItem component
   */
  renderFlatListItem(item) {
    return (
      <EventsItem 
        item={item}
        onPress={() => Actions.eventsDetails({ item })}
        event='comming'
      />
    );
  }
  /**
   * Used to render the EventList item component.
   * 
   * @returns {ReactElement} EventsItem component
   */
  renderPastEventsListItem(item) {
    return (
      <EventsItem 
        item={item}
        onPress={() => Actions.eventsDetails({ item })}
        event='past'
      />
    );
  }
  /**
   * Used to rende the events screen
   * 
   * @returns {ReactElement} 
   */
  rendersScreen() {
    if (this.props.loading) {
      return (
        <View style={Styles.spinnerStyle} >
          <ActivityIndicator size='large' color='#000000' />
        </View>
      );
    }
    if (this.props.events[0]) {
      if (this.state.selectedTab === 0) {
        return (
          <FlatList
            data={this.props.events[0].$past}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => this.renderPastEventsListItem(item)}
          />
        );
      }
      return (
        <FlatList
          data={this.props.events[1].$coming}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => this.renderFlatListItem(item)}
        />
      );
    }
  }
  /**
   * Used to render events list  component
   * 
   * @returns {ReactElement} EventList component
   */
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.subSection}>
          <TouchableOpacity
            onPress={() => this.setState({ selectedTab: 0 })}
          >
            <View style={Styles.subSectionStyle}>
              <Image
                style={Styles.iconStyle}
                source={events}
                resizeMode='contain'
              />
              <Text style={Styles.itemSectionText}>فعاليات منتهية</Text>
              <Text style={Styles.itemSectionText}>Events</Text>
            </View>
          </TouchableOpacity>
          <View style={Styles.lineDivider} />
          <TouchableOpacity
            onPress={() => this.setState({ selectedTab: 1 })}
          >
            <View style={Styles.subSectionStyle}>
              <Image
                style={Styles.iconStyle}
                source={events}
                resizeMode='contain'
              />
              <Text style={Styles.itemSectionText}>فعاليات بالانتظار</Text>
              <Text style={Styles.itemSectionText}>Events</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.section}>
          {this.rendersScreen()}
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    events: state.SearchedData.events,
    loading: state.SearchedData.loading
  };
};
export default connect(mapStateToProps)(EventList);
