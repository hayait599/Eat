import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import MenuList from './MenuSection/MenuList';
import {
  RestaurantInfo,
  EvaluationSection,
  RestaurantLocationMap,
  AvailableServices,
  LogisticsServices,
  RestaurantOffersList,
  RestaurantPhotosList,
  RestaurantEventsList
} from './index';
import {
  selectedTab
} from './../../actions/index';

import Styles from './Styles';

const clickedEvents = require('./../../images/RestaurantDetails/EventsClicked.png');
const events = require('./../../images/RestaurantDetails/Events.png');
const clickedFood = require('./../../images/RestaurantDetails/FoodClicked.png');
const food = require('./../../images/RestaurantDetails/Food.png');
const clickedInformation = require('./../../images/RestaurantDetails/InformationClicked.png');
const information = require('./../../images/RestaurantDetails/Information.png');
const clickedOffers = require('./../../images/RestaurantDetails/OffersClicked.png');
const offers = require('./../../images/RestaurantDetails/Offers.png');
const clickedServices = require('./../../images/RestaurantDetails/ServicesClicked.png');
const services = require('./../../images/RestaurantDetails/Services.png');
const clickedGallery = require('./../../images/RestaurantDetails/GalleryClicked.png');
const gallery = require('./../../images/RestaurantDetails/Gallery.png');
/**
 * Defines RestaueantsTabs class.
 * 
 * @class RestaueantsTabs
 * @extends {Component}
 */
class RestaueantsTabs extends Component {
  /**
   * Used to navigate the user to the selected tab
   * 
   * @param {object} item 
   * 
   * @returns Void
   */
  onTabPress(item) {
    this.props.selectedTab(item);
    this.forceUpdate();
  }
  /**
   * Used to render the services icon
   * 
   * @returns Void
   */
  renderServicesIcon() {
    if (this.props.selectedTabId === 1) {
      return (
        <TouchableOpacity 
          onPress={() => this.onTabPress(1)}
          style={Styles.tab}
        >
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={clickedServices}
          />
          <Text style={Styles.selectedTabText}> الخدمات</Text>
          <Text style={Styles.selectedTabText}>Services</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={Styles.tab}
        onPress={() => this.onTabPress(1)}
      >
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={services}
        />
        <Text style={Styles.tabText}> الخدمات</Text>
        <Text style={Styles.tabText}>Services</Text>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the food icon
   * 
   * @returns Void
   */
  renderFoodIcon() {
    if (this.props.selectedTabId === 2) {
      return (
        <TouchableOpacity 
          onPress={() => this.onTabPress(2)}
          style={Styles.tab}
        >
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={clickedFood}
          />
          <Text style={Styles.selectedTabText}> قائمة الطعام</Text>
          <Text style={Styles.selectedTabText}>Food Menu</Text>
        </TouchableOpacity> 
      );
    }
    return (
      <TouchableOpacity 
        style={Styles.tab}
        onPress={() => this.onTabPress(2)}
      >
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={food}
        />
        <Text style={Styles.tabText}> قائمة الطعام</Text>
        <Text style={Styles.tabText}>Food Menu</Text>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the information icon
   * 
   * @returns Void
   */
  renderInfoIcon() {
    if (this.props.selectedTabId === 3) {
      return (
        <TouchableOpacity
          onPress={() => this.onTabPress(3)}
          style={Styles.tab}
        >
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={clickedInformation}
          />
          <Text style={Styles.selectedTabText}> معلومات </Text>
          <Text style={Styles.selectedTabText}>Information</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity 
        onPress={() => this.onTabPress(3)}
        style={Styles.tab}
      >
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={information}
        />
        <Text style={Styles.tabText}> معلومات </Text>
        <Text style={Styles.tabText}>Information</Text>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the gallary icon
   * 
   * @returns Void
   */
  renderGallaryIcon() {
    if (this.props.selectedTabId === 4) {
      return (
        <TouchableOpacity 
          onPress={() => this.onTabPress(4)}
          style={Styles.tab}
        >
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={clickedGallery}
          />
          <Text style={Styles.selectedTabText}> البوم الصور </Text>
          <Text style={Styles.selectedTabText}>Photo gallary</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity 
        onPress={() => this.onTabPress(4)}
        style={Styles.tab}
      >
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={gallery}
        />
        <Text style={Styles.tabText}> البوم الصور </Text>
        <Text style={Styles.tabText}>Photo gallary</Text>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the events icon
   * 
   * @returns Void
   */
  renderEventsIcon() {
    if (this.props.selectedTabId === 5) {
      return (
        <TouchableOpacity
          onPress={() => this.onTabPress(5)}
          style={Styles.tab}
        >
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={clickedEvents}
          />
          <Text style={Styles.selectedTabText}>فعاليات</Text>
          <Text style={Styles.selectedTabText}>Events</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => this.onTabPress(5)}
        style={Styles.tab}
      >
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={events}
        />
        <Text style={Styles.tabText}>فعاليات</Text>
        <Text style={Styles.tabText}>Events </Text>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the offers icon
   * 
   * @returns Void
   */
  renderOffersIcon() {
    if (this.props.selectedTabId === 6) {
      return (
        <TouchableOpacity 
          onPress={() => this.onTabPress(6)}
          style={Styles.tab}
        >
          <Image
            resizeMode='contain'
            style={Styles.tabsImage}
            source={clickedOffers}
          />
          <Text style={Styles.selectedTabText}>عروض و خصم</Text>
          <Text style={Styles.selectedTabText}>Offers</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity 
        onPress={() => this.onTabPress(6)}
        style={Styles.tab}
      >
        <Image
          resizeMode='contain'
          style={Styles.tabsImage}
          source={offers}
        />
        <Text style={Styles.tabText}>عروض و خصم</Text>
        <Text style={Styles.tabText}>Offers</Text>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the services list menu
   * 
   * @param {object} item 
   * @returns {ReactElement} FlatList
   */
  renderTabsFlatListItem() {
    return (
      <View style={Styles.tabsSection} >
        <View style={Styles.tabsSubSection} >
          {this.renderServicesIcon()}
          {this.renderFoodIcon()}
          {this.renderInfoIcon()}
        </View>
        <View style={Styles.tabsSubSection} >
          <View style={Styles.tabsSubSection} >
            {this.renderGallaryIcon()}
            {this.renderEventsIcon()}
            {this.renderOffersIcon()}
          </View>
        </View>
      </View>
    );
  }
  /**
   * Used to render the selected tab content
   * 
   * @returns {ReactElement}
   */
  renderSelectedTabInfo() {
    if (this.props.restaurantItem) {
      const { latitude } = this.props.restaurantItem;
      const { longitude } = this.props.restaurantItem;
      switch (this.props.selectedTabId) {
        case 1:
          return (
            <View>
              <View style={Styles.restaurantInfoContainer}>
                <AvailableServices item={this.props.restaurantItem} />
                <LogisticsServices />
              </View>
              <RestaurantLocationMap
                title={'على الخارطة'}
                latitude={latitude}
                longitude={longitude}
              />
              <EvaluationSection />
            </View>
          );
        case 2:
          return (
            <MenuList item={this.props.restaurantMenu} />
          );
        case 3:
          return (
            <RestaurantInfo />
          );
        case 4: 
          return (
            <RestaurantPhotosList />
          );
        case 5:
        return (
          <RestaurantEventsList />
        );
        case 6:
          return (
            <RestaurantOffersList />
          );
        default: return <View />;
      }
    }
  }
  /**
   * Used to render the restaurant details screen component.
   * 
   * @returns {ReactElement} RestaurantDetailsScreen component
   */
  render() {
    return (
      <View>
        {this.renderTabsFlatListItem()}
        <View style={Styles.lineDivider} />
        {this.renderSelectedTabInfo()}
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaueantsTabs class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    selectedTabId: state.SelectedId.selectedTab,
    restaurantItem: state.SearchedData.restaurantItem.restaurant,
    detailsLoading: state.SearchedData.detailsLoading,
    workingHours: state.SearchedData.restaurantItem.workingHours,
    restaurantState: state.SearchedData.restaurantItem.restaurantState,
    restaurantMenu: state.SearchedData.restaurantItem.restaurantMenu,
  };
};
export default connect(mapStateToProps, { selectedTab })(RestaueantsTabs);

