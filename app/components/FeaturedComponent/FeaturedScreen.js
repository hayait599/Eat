import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  featuredRestaurants,
  setLocationsMenuState,
  getLocations
} from './../../actions/index';
import 
  LocationsFilterHeader 
from './../../utils/Componenets/LocationsFilter/LocationsFilterHeader';

import { FeaturedList } from './index';
import { Styles } from './Styles';

const featuredIcon = require('./../../images/FeaturedIcon.png');
const location = require('./../../images/OnlineOrder/Location.png');
/**
 * Defines the featured restaurants screen class.
 * 
 * @class FeaturedScreen
 * @extends {Component}
 */
class FeaturedScreen extends Component {
  /**
   * Caled when the component is about to mount
   * Used to make a request to get the featured restaurants and available locations.
   * 
   * @return void
   */
  componentWillMount() {
    this.props.featuredRestaurants();
    this.props.getLocations();
  }
  /**
   * Used to set the locations menu to true, inorder to open in
   * 
   * @return void
   */
  setLocationsMenuState() {
    this.props.setLocationsMenuState(true);
  }
  /**
   * Used to render the featured restaurants screen component.
   * 
   * @returns {ReactElement} FeaturedScreen component
   */
  render() {
    return (
      <LocationsFilterHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        secondIconName='shopping-cart'
      >
        <ScrollView style={Styles.scrollStyle} >
          <View style={Styles.containerList} >
            <Image
              style={Styles.iconStyle}
              source={featuredIcon}
              resizeMode='contain'
            />
            <Text style={Styles.itemSectionText}>مطاعم مميزة</Text>
            <Text style={Styles.itemSectionText}>Featured Restaurants</Text>
            <TouchableOpacity
              onPress={() => this.setLocationsMenuState()}
              style={Styles.containerList}
            >
              <Image
                style={Styles.subIconStyle}
                source={location}
                resizeMode='contain'
              />
              <Text style={Styles.subItemText}> اضغط لاختيار حسب المنطقة</Text>
              <Text style={Styles.subItemText}>Click to select region</Text>
            </TouchableOpacity>
            <FeaturedList />
          </View>
        </ScrollView>
      </LocationsFilterHeader>
    );
  }
}
export default connect(null, {
  featuredRestaurants,
  getLocations,
  setLocationsMenuState
})(FeaturedScreen);

