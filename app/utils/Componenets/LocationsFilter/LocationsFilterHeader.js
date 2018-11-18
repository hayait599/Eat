import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import
Menu, {
  MenuContext,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import {
  authSuccess,
  clearSearchResult,
  searchText,
  setLocationsMenuState,
  filterFeaturedRestaurants,
  userLogout
} from './../../../actions/index';
import {
  Styles,
  optionsStyles,
  locationsOptionsStyles
} from './Styles';

const logo = require('./../../../images/EatLogo.png');
const homeIcon = require('./../../../images/HomeIcon.png');
const support = require('./../../../images/Support.png');
const commentIcon = require('./../../../images/CommentIcon.png');
const labelIcon = require('./../../../images/LabelIcon.png');
const settingsIcon = require('./../../../images/SettingsIcon.png');
const smallCalendar = require('./../../../images/SmallCalendar.png');
const heartIcon = require('./../../../images/HeartIcon.png');
const cartIcon = require('./../../../images/CartIcon.png');
const searchIcon = require('./../../../images/SearchIcon.png');
const logoutIcon = require('./../../../images/LogoutIcon.png');
const useIcon = require('./../../../images/UseIcon.png');
const adv = require('./../../../images/Adv.png');


/**
 * Defines the menu header component for all screens
 *
 * @class MenuComponent
 * @extends {Component}
 */
class LocationsFilterHeader extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the MenuHeader component
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {ReactElement} children Defines the wraped component
     * @property {string} firstIconName  Defines the first icon name if exists
     * @property {string} secondIconName Defines the second icon name if exists
     */
    this.state = {
      children: this.props.children,
      firstIconName: this.props.firstIconName,
      secondIconName: this.props.secondIconName,
    };
  }
  /**
   * Used to manage the profile screen navigation
   * 
   */
  profileNavigation() {
    if (this.props.accessToken) {
      Actions.profileScreen();
    }
    if (!this.props.accessToken || this.props.accessToken === '') {
      Actions.loginScreen();
    }
  }
  /**
   * Used to render the number of cart items
   * 
   * @returns {Text}
   */
  renderNumberOfItems() {
    if (this.props.numberOfItems > 0 && this.state.secondIconName) {
      return <Text style={Styles.numberOfItems} >{this.props.numberOfItems}</Text>;
    }
    return <Text style={Styles.numberOfItems} />;
  }
    /**
   * Called when a location item is pressed 
   * 
   * @param {object} item 
   * @returns Void
   */
  onLocationsMenuItemSelect(item) {
    this.props.filterFeaturedRestaurants(item.id);
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
        <View style={Styles.manuStyle}>
          <TouchableOpacity onPress={this.props.onBackPress}>
            <Icon
              style={Styles.manuIconStyle}
              name={this.props.thirdIconName}
              color='#000000'
              size={responsiveFontSize(4)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.ordersListScreen()}>
            <Icon
              style={Styles.manuIconStyle}
              name={this.state.secondIconName}
              color='#000000'
              size={responsiveFontSize(4)}
            />
          </TouchableOpacity>
          {this.renderNumberOfItems()}
          <View style={{ flex: 0.8 }} />
          <Image
            style={Styles.iconStyle}
            source={logo}
            resizeMode='contain'
          />
          <View style={{ flex: 1 }} />
          <Menu
            name='types'
            onSelect={value => this.selectOptionType(value)}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger>
              <Icon
                style={Styles.manuIconStyle}
                name='menu'
                color='#000000'
                size={responsiveFontSize(4)}
              />
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
              <View style={Styles.headerStyle}>
                <Text style={Styles.optionText} >Usen name</Text>
                <Image
                  style={Styles.headerIcon}
                  source={useIcon}
                  resizeMode='contain'
                />
              </View>
              <MenuOption
                value='homePage'
                style={Styles.menuOption}
                onSelect={() => Actions.homeScreen()}
              >
                <Text style={Styles.optionText} >القائمة الرئيسية</Text>
                <Image
                  style={Styles.subIconStyle}
                  source={homeIcon}
                  resizeMode='contain'
                />
              </MenuOption>
              <MenuOption
                value='logout'
                style={Styles.menuOption}
                onSelect={() => this.props.userLogout()}
              >
                <Text style={Styles.optionText} >تسجيل الخروج</Text>
                <Image
                  style={Styles.subIconStyle}
                  source={logoutIcon}
                  resizeMode='contain'
                />
              </MenuOption>
              <MenuOption
                value='search'
                style={Styles.menuOption}
                onSelect={() => Actions.homeScreen()}
              >
                <Icon
                  name='mic'
                  color='#000000'
                  size={responsiveFontSize(2.5)}
                />
                <Text style={Styles.optionText} >ابحث عن مطعمك</Text>
                <Image
                  style={Styles.subIconStyle}
                  source={searchIcon}
                  resizeMode='contain'
                />
              </MenuOption>
              <MenuOption
                value='onlineOrder'
                style={Styles.menuOption}
                onSelect={() => Actions.onlineOrderScreen()}
              >
                <Text style={Styles.optionText} >اطلب مطعمك الكترونيا</Text>
                <Image
                  style={Styles.subIconStyle}
                  source={cartIcon}
                  resizeMode='contain'
                />
              </MenuOption>
              <MenuOption
                value='favorites'
                style={Styles.menuOption}
                onSelect={() => this.profileNavigation()}
              >
                <Text style={Styles.optionText} >قائمتي المفضلة</Text>
                <Image
                  style={Styles.subIconStyle}
                  source={heartIcon}
                  resizeMode='contain'
                />
              </MenuOption>
              <MenuOption
                value='events'
                style={Styles.menuOption}
                onSelect={() => Actions.eventsScreen()}
              >
                <Text style={Styles.optionText} >احداث و فعاليات مترقبة </Text>
                <Image
                  style={Styles.subIconStyle}
                  source={smallCalendar}
                  resizeMode='contain'
                />
              </MenuOption>

              <MenuOption
                value='settings'
                style={Styles.menuOption}
                onSelect={() => Actions.settingsScreen()}
              >
                <Text style={Styles.optionText} >اعدادات</Text>
                <Image
                  style={Styles.subIconStyle}
                  source={settingsIcon}
                  resizeMode='contain'
                />
              </MenuOption>
              <MenuOption
                value='offers'
                style={Styles.menuOption}
                onSelect={() => Actions.offersScreen()}
              >
                <Text style={Styles.optionText} >اخر الحملات و العروضات</Text>
                <Image
                  style={Styles.subIconStyle}
                  source={labelIcon}
                  resizeMode='contain'
                />
              </MenuOption>

              <MenuOption
                value='contactUS'
                style={Styles.menuOption}
                onSelect={() => console.log()}
              >
                <Text style={Styles.optionText} >اتصل بنا </Text>
                <Image
                  style={Styles.subIconStyle}
                  source={commentIcon}
                  resizeMode='contain'
                />
              </MenuOption>
              <Image
                style={Styles.supportIcon}
                source={support}
                resizeMode='contain'
              />
              <View style={Styles.lineDivider} />
              <View style={Styles.advertisement} >
                <Image
                  style={Styles.iconStyle}
                  source={adv}
                  resizeMode='contain'
                />
                <Text>advertisement</Text>
              </View>
            </MenuOptions>
          </Menu>
          <Menu
            name='locations'
            onSelect={value => this.selectOptionType(value)}
            onBackdropPress={() => this.props.setLocationsMenuState(false)}
            opened={this.props.locationsMenu}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger />
            {this.renderlocations()}
          </Menu>
        </View>
        {this.state.children}
      </MenuContext>
    );
  }
}
/**
 * Used to pass the store state to the MenuHeader class
 * @constant mapStateToProps
 * @param {object} state The redux store state.
 * @param {string} state.Authentication.token The stored access token
 * @param {string} state.Cart.numberOfItems The number of items added to the cart 
 * @returns {string} accessToken {int} numberOfItems props
 */
const mapStateToProps = state => {
  return {
    locations: state.SearchedData.locations,
    locationsMenu: state.SelectedId.locationsMenu,
    accessToken: state.Authentication.token,
    numberOfItems: state.Cart.numberOfItems,
  };
};
export default connect(mapStateToProps, {
  authSuccess,
  clearSearchResult,
  setLocationsMenuState,
  userLogout,
  filterFeaturedRestaurants,
  searchText
})(LocationsFilterHeader);
