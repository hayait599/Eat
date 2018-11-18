import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text
} from 'react-native';
import MapView from 'react-native-maps';
import Styles from './../Styles';
/**
 * Defines restaurant location map screen component.
 * 
 * @class RestaurantLocationMap
 * @extends {Component}
 */
class RestaurantLocationMap extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the 
   *   RestaurantLocationMap component
   */
  constructor(props) {
    super(props);
    const { width, height } = Dimensions.get('window');
    /**
     * @type {object} 
     * @property {object} region Array of markers details.
     * @property {object} region.latitude The marker's latitude
     * @property {object} region.longitude The marker's longitude
     * @property {object} region.latitudeDelta The map zooming degree
     * @property {object} region.longitudeDelta The map zooming degree
     */
    this.state = {
      region: {
        latitude: parseFloat(this.props.latitude),
        longitude: parseFloat(this.props.longitude),
        latitudeDelta: 0.004,
        longitudeDelta: 0.004 * (width / height)
      },
    };
  }
  /**
   * Used to render the restaurant loction on a map as a marker.
   * 
   * @returns {ReactElement} RestaurantLocationMap component
   */
  render() {
    const isLocatioAvailable = this.props.latitude === 0 &&
      this.props.longitude === 0;
    const isLocationNull = this.props.latitude === null ||
      this.props.longitude === null;
    if (isLocatioAvailable || isLocationNull) {
      return (
        <View style={Styles.restaurantInfoContainer}>
          <Text style={Styles.informationTitle}>{this.props.title}</Text>
          <Text>لا يوجد موقع متوفر لهذا المطعم</Text>
        </View>
      );
    }
    return (
      <View style={Styles.restaurantInfoContainer}>
        <Text style={Styles.informationTitle}>{this.props.title}</Text>
        <MapView.Animated
          region={this.state.region}
          style={Styles.mapContainer}
        >
          <MapView.Marker
            coordinate={this.state.region}
          />
        </MapView.Animated>
      </View>
    );
  }
}
export { RestaurantLocationMap };
