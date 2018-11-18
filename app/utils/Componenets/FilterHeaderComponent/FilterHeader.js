import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import
  Menu, {
  MenuContext,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers
} from 'react-native-popup-menu';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import {
  getLocations,
  searchByServiceAndLocation
} from './../../../actions/index';
import {
  Styles,
  locationsOptionsStyles,
  servicesOptionsStyles
} from './Styles';

const searcgByLocation = require('./../../../images/Locations.png');
const services = require('./../../../images/Services.png');
/**
 * Defines the filter header component for all screens
 *
 * @class FilterHeader
 * @extends {Component}
 */
class FilterHeader extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the FilterHeader component
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {ReactElement} children Defines the wraped component
     * @property {string} firstIconName  Defines the first icon name if exists
     * @property {string} secondIconName Defines the second icon name if exists
     * @property {object[]} locations The restaurants available locations
     * @property {object} selectedLocation The menu selected location
     * @property {object} selectedService The menu selected services
     * @property {object[]} servicesData The services menu datails
     */
    this.state = {
      children: this.props.children,
      firstIconName: this.props.firstIconName,
      secondIconName: this.props.secondIconName,
      locations: this.props.firstOptionData,
      selectedLocation: 0,
      selectedService: [],
      servicesData: [
        { 
          id: 1,
          name: 'organicFoods',
          offUri: require('./../../../images/org1.png'), 
          onUri: require('./../../../images/org2.png') 
        },
        { 
          id: 2,
          name: 'beInSport',
          offUri: require('./../../../images/bein1.png'), 
          onUri: require('./../../../images/bein2.png') 
        },
        { 
          id: 3,
          name: 'tv',
          offUri: require('./../../../images/tv1.png'), 
          onUri: require('./../../../images/tv2.png') 
        },
        { 
          id: 4,
          name: 'playin_yard',
          offUri: require('./../../../images/play1.png'), 
          onUri: require('./../../../images/play2.png') 
        },
        { 
          id: 5,
          name: 'cars_parking',
          offUri: require('./../../../images/parking1.png'), 
          onUri: require('./../../../images/parking2.png') 
        },
        { 
          id: 6,
          name: 'calling_taxi',
          offUri: require('./../../../images/taxi1.png'), 
          onUri: require('./../../../images/taxi2.png') 
        },
        { 
          id: 7,
          name: 'takeAway',
          offUri: require('./../../../images/tak1.png'), 
          onUri: require('./../../../images/tak2.png') 
        },
        { 
          id: 8,
          name: 'open_set_spaces',
          offUri: require('./../../../images/land1.png'), 
          onUri: require('./../../../images/land2.png') 
        },
        { 
          id: 9,
          name: 'visa_pay',
          offUri: require('./../../../images/visa1.png'), 
          onUri: require('./../../../images/visa2.png') 
        },
        { 
          id: 10,
          name: 'free_wifi',
          offUri: require('./../../../images/wifi1.png'), 
          onUri: require('./../../../images/wifi2.png') 
        },
        { 
          id: 11,
          name: 'baby_chare',
          offUri: require('./../../../images/chr1.png'), 
          onUri: require('./../../../images/chr2.png') 
        },
        { 
          id: 12,
          name: 'table_reserv_onPhone',
          offUri: require('./../../../images/res1.png'), 
          onUri: require('./../../../images/res2.png') 
        },
        { 
          id: 13,
          name: 'airCondtion',
          offUri: require('./../../../images/air1.png'), 
          onUri: require('./../../../images/air2.png') 
        },
        { 
          id: 14,
          name: 'cams',
          offUri: require('./../../../images/cam1.png'), 
          onUri: require('./../../../images/cam2.png') 
        },
        { 
          id: 15,
          name: 'handicap',
          offUri: require('./../../../images/hc1.png'), 
          onUri: require('./../../../images/hc2.png') 
        },
      ]
    };
  }
  componentWillMount() {
    this.props.getLocations();
  }
  /**
   * Called when a location item is pressed 
   * 
   * @param {object} item 
   * @returns Void
   */
  onLocationsMenuItemSelect(item) {
    this.setState({ selectedLocation: item.id });
    this.props.searchByServiceAndLocation(item.id, this.state.selectedService);
  }
  /**
   * Called when a service icon is pressed used to add the 
   * pressed service to the selectedService state.
   * 
   * @param {object} item 
   * @returns Void
   */
  onServiceMenuItemSelect(item) {
    const selectedService = this.state.selectedService;
    let selectedItems;
    const isSelected = this.state.selectedService.includes(item.name);
    if (isSelected) {
      selectedItems = this.state.selectedService.filter(nameItem => nameItem !== item.name);
      this.setState({ 
        selectedService: this.state.selectedService.filter(nameItem => nameItem !== item.name)
      });
      this.props.searchByServiceAndLocation(
        this.state.selectedLocation, 
        selectedItems
      );
    } else {
      selectedService.push(item.name);
      this.setState({ selectedService });
      this.props.searchByServiceAndLocation(
        this.state.selectedLocation, 
        selectedService
      );
    }
  } 
  /**
   * Used to render the locations menu items
   * 
   * @returns {ReactElement} MenuOption
   */
  renderLocationsFlatListItem() {
    const locations = this.props.locations;
    if (locations) {
      if (locations.length > 0) {
        return locations.map(item =>
          <MenuOption
            key={item.id}
            value={item.id}
            text={item.location}
            onSelect={() => this.onLocationsMenuItemSelect(item)}
            customStyles={locationsOptionsStyles}
          />
        );
      }
    }
  }
  /**
   * Used to render the services menu items
   * 
   * @param {object} item 
   * @returns {ReactElement} service icon
   */
  renderServicesItem(item) {
    const isSelected = this.state.selectedService.includes(item.name);
    if (isSelected) {
      return (
        <TouchableOpacity onPress={() => this.onServiceMenuItemSelect(item)}>
          <Image
            key={item.id}
            style={Styles.logisticsImage}
            source={item.onUri}
          />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.onServiceMenuItemSelect(item)}>
        <Image
          key={item.id}
          style={Styles.logisticsImage}
          source={item.offUri}
        />
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the services list menu
   * 
   * @param {object} item 
   * @returns {ReactElement} FlatList
   */
  renderServicesFlatListItem() {
    return (
      <FlatList
        data={this.state.servicesData}
        renderItem={({ item }) => this.renderServicesItem(item)}
        keyExtractor={item => item.id}
        numColumns={5} 
      />
    );
  }
  /**
   * Used to render the services menu
   * 
   * @returns {ReactElement} MenuOptions
   */
  renderServices() {
    return (
      <MenuOptions customStyles={servicesOptionsStyles}>
        {this.renderServicesFlatListItem()}
      </MenuOptions>
    );
  }
  /**
   * Used to render the locations menu
   * 
   * @returns {ReactElement} MenuOptions
   */
  renderlocations() {
    return (
      <MenuOptions customStyles={locationsOptionsStyles}>
        <ScrollView style={{ flex: 1 }}>
          {this.renderLocationsFlatListItem()}
        </ScrollView>
      </MenuOptions>
    );
  }
  /**
   * Used to render the drop down menu header component
   *
   * @returns {ReactElement} MenuHeader component
   */
  render() {
    return (
      <MenuContext>
        <View style={Styles.menuStyle}>
          <Menu
            name='services'
            onSelect={value => this.selectOptionType(value)}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger>
              <View style={Styles.searchOption} >
                <Text style={Styles.headerText}>{this.props.secondOption}</Text>
                <Image
                  style={Styles.iconStyle}
                  source={services}
                  resizeMode='cover'
                />
              </View>
            </MenuTrigger>
            {this.renderServices()}
          </Menu>
          <View style={Styles.lineDivider} />
          <Menu
            name='locations'
            onSelect={value => this.selectOptionType(value)}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger>
            <View style={Styles.searchOption} >
                <Text style={Styles.headerText}>{this.props.firstOption}</Text>
                <Image
                  style={Styles.iconStyle}
                  source={searcgByLocation}
                  resizeMode='cover'
                />
              </View>
            </MenuTrigger>
            {this.renderlocations()}
          </Menu>
        </View>
        {this.state.children}
      </MenuContext>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object[]} state.SearchedData.locations The returned access token.
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    locations: state.SearchedData.locations
  };
};
export default connect(mapStateToProps, {
  getLocations,
  searchByServiceAndLocation
})(FilterHeader);
