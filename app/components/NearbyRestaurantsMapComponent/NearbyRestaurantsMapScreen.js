import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';
import {
  Thumbnail
} from 'native-base';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { connect } from 'react-redux';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getCDNRoute } from './../../services/Api';
import { getNearByLocations, clearNearByLocation } from './../../actions/index';
import Styles from './Styles';

/**
 * Map zooming degree
 */
const LATITUDE_DELTA = 0.01;
/**
 * Map zooming degree
 */
const LONGITUDE_DELTA = 0.01;
/**
 * Map initial location
 */
const initialRegion = {
  latitude: 31.887612,
  longitude: 35.239377,
  latitudeDelta: 0.7,
  longitudeDelta: 0.7
};
/**
 * Defines NearbyRestaurantsMapScreen class.
 * 
 * @class NearbyRestaurantsMapScreen
 * @extends {Component}
 */
class NearbyRestaurantsMapScreen extends Component {
  
  map = null;
  /**
   * @constructor
   * @param {object} props Used for passing data to the
   *   NearbyRestaurantsMapScreen component
   */
  constructor(props) {
    super(props);
    let index = 1;
    this.state = {
      region: null,
      restaurants: [],
      textInputValue: '',
      radius: 0.31,
      inside: true,
      message: true,
      ready: true,
      data: [
        { key: index++, section: true, label: 'Select your searching radius' },
        { key: index++, label: '0.5 kilometers', radius: 0.310686, delta: 0.01 },
        { key: index++, label: '1 kilometer', radius: 0.631371, delta: 0.02 },
        { key: index++, label: '3 kilometers', radius: 1.86411, delta: 0.03 },
        { key: index++, label: '5 kilometers', radius: 3.10686, delta: 0.05 },
        { key: index++, label: '10 kilometers', radius: 6.21371, delta: 0.07 }
      ]
    };
  }
  /** 
   * Called when the component is about to mount.
   * Used to define the geolocation watcher and animate 
   * the map on the user's location.
   * 
   * @return Void
   */
  componentWillMount() {
    this.props.clearNearByLocation();
    this.getCurrentPosition();
    this.setState({ region: null });
    setInterval(() => this.getCurrentPosition(), 500);
  }
  /** 
   * Called when the component mounts.
   * Used to animate the map to the user's location.
   * 
   * @return Void
   */
  componentDidMount() {
    if (this.state.region) {
      this.setRegion(this.state.region);
    }
  }
  /** 
   * Called when the component is about to unmount.
   * 
   * @return Void
   */
  componentWillUnmount() {
    this.setState({ ready: false });
    this.setState({ inside: false });
    this.setState({ region: null });
  }
  /**
   * Used to get the user's current location
   * 
   * @return Void
   */
  getCurrentPosition() {
    try {
      if (!this.state.region) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            };
            this.setRegion(region);
            this.setState({ region });
            this.props.getNearByLocations(
              position.coords.latitude,
              position.coords.longitude,
              this.state.radius
            );
            this.setRegion(region);
            this.map.animateToRegion(region);
          },
          (error) => {
            if (this.state.message) {
              Alert.alert('', 'Please check your GPS, and Wifi connection');
              this.setState({ message: false });
            }
          }
        );
      }
    } catch (e) {

    }
  }
  /** 
   * Called when onModalPicker is clicked.
   * 
   * @param {object} option The clicked modal option
   * 
   * @returns Void
   */
  onModalPickerClicked(option) {
    this.setState({ textInputValue: option.label });
    this.setState({ radius: option.radius });
    this.setRegion(this.state.region);
    if (this.state.region) {
      this.props.getNearByLocations(
        this.state.region.latitude,
        this.state.region.longitude,
        option.radius
      );
      const region = {
        latitude: this.state.region.latitude,
        longitude: this.state.region.longitude,
        latitudeDelta: option.delta,
        longitudeDelta: option.delta
      };
      this.map.animateToRegion(region);
    }
  }
  /** 
   * Used to animate the map to the user's location
   * 
   * @param {object} region The user's region
   * 
   * @returns Void
   */
  setRegion(region) {
    if (this.state.ready) {
      try {
        if (region && this.map) {
          this.map.animateToRegion(region);
        }
      } catch (e) {

      }
    }
  }
  /**
   * Called when the map is ready
   * 
   * @returns Void
   */
  onMapReady = () => {
    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  };
  /** 
   * Used to place the markers on the map.
   * 
   * @returns markers components  
   */
  renderMarkers() {
    if (this.props.NearbyLocations.length > 0) {
      const restaurants = this.props.NearbyLocations;
      const markers = restaurants.map((restaurant, key) => {
        const coordinates = {
          latitude: parseFloat(restaurant.latitude),
          longitude: parseFloat(restaurant.longitude)
        };
        return (
          <MapView.Marker
            key={key}
            coordinate={coordinates}
            restaurantName={restaurant.restaurantName}
            onCalloutPress={() => Alert.alert(restaurant.restaurantName)}
          >
            <MapView.Callout>
              <View style={Styles.customView}>
                <Thumbnail
                  small
                  source={{ uri: getCDNRoute('restaurantPhoto') + restaurant.logo }}
                />
                <Text style={Styles.nameTextStyle}>
                  {restaurant.restaurantName}
                </Text>
                <Text style={Styles.descriptionTextStyle}>
                  {restaurant.kitchenType}
                </Text>
                <View style={Styles.iconsBar}>
                  <Icon
                    name='google-maps'
                    color='#e62531'
                    size={responsiveFontSize(4)}
                  />
                  <Icon
                    name='phone'
                    color='#e62531'
                    size={responsiveFontSize(4)}
                  />
                </View>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        );
      });
      return markers;
    }
  }
  /**
   * Used to render nearby restaurants map screen component.
   *  
   * @returns {ReactElement} NearbyRestaurantsMapScreen component
   */
  render() {
    return (
      <View style={Styles.container}>
        <MapView
          ref={map => { this.map = map }}
          initialRegion={initialRegion}
          onMapReady={this.onMapReady}
          showsMyLocationButton={false}
          showsUserLocation
          style={StyleSheet.absoluteFill}
          textStyle={{ color: '#bc8b00' }}
        >
          {this.renderMarkers()}
        </MapView>
        <View style={Styles.modalStyle}>
          <ModalSelector
            data={this.state.data}
            initValue='search diameter controller'
            onChange={(option) => { this.onModalPickerClicked(option); }}
          >
            <TextInput
              style={Styles.modalInputText}
              editable={false}
              placeholder='search diameter controller'
              value={this.state.textInputValue}
              placeholderTextColor='#ffffff'
            />
          </ModalSelector>
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.NearbyLocations.nearbyRestaurants The returned restaurants.
 * @returns NearbyLocations props
 */
const mapStateToProps = state => {
  return {
    NearbyLocations: state.NearbyLocations.nearbyRestaurants
  };
};
export default connect(mapStateToProps, {
  getNearByLocations,
  clearNearByLocation
})(NearbyRestaurantsMapScreen);
