import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Styles from './../Styles';
import {
  QuickSearchLinks,
} from './../index';
import {
  clearSearchResult,
  searchText
} from './../../../actions/index';
import SearchBar from './SearchBar';
import { getCDNRoute } from './../../../services/Api';

const location = require('./../../../images/HomeScreenLocation.png');
const offers = require('./../../../images/HomeScreenOffers.png');
const featured = require('./../../../images/HomeScreenFeatured.png');
const services = require('./../../../images/HomeSearch.png');
const order = require('./../../../images/HomeOnlineOrder.png');
/**
 * Defines the search restaurants tab component.
 * 
 * @class SearchRestaurantsTab
 * @returns {ReactElement} SearchRestaurantsTab component
 */
class SearchRestaurantsTab extends Component {
  /**
   * Used to clear search resault
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.clearSearchResult();
    this.props.searchText('');
  }
  /**
   * Used to clear search resault
   * 
   * @returns Void
   */
  componentDidMount() {
    this.props.clearSearchResult();
    this.props.searchText('');
  }
  /**
   * Used to render the search tab component.
   * 
   * @returns {ReactElement} search tab component
   */
  render() {
    return (
      <View style={Styles.firstTab} >
        <Image
          style={Styles.searchBarStyle}
          source={{ uri: getCDNRoute('background') + this.props.background }}
        >
          <SearchBar />
        </Image>
        <View style={Styles.bodyContainer} >
          <TouchableOpacity onPress={() => Actions.offersScreen()}>
            <QuickSearchLinks
              title='احدث الحملات و العروض'
              number={this.props.offersCount}
              icon={offers}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.nearbyRestaurantsMapScreen()}>
            <QuickSearchLinks
              title='ما هي المطاعم القريبة مني'
              number={this.props.nearByLocationsCount}
              icon={location}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.featuredScreen()}>
            <QuickSearchLinks
              title='مطاعم مميزة '
              icon={featured}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.searchByServicesScreen()}>
            <QuickSearchLinks
              title='اريد مطعما يناسبني '
              icon={services}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.onlineOrderScreen()}>
            <Image
              style={Styles.mainIconStyle}
              source={order}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.advertisement} >
          <View style={Styles.lineDivider} />
          <Text> منطقة اعلانات تجارية</Text>
        </View>
      </View >
    );
  }
}
/**
 * Used to pass the store state to the SearchRestaurantsTab class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object}  props
 */
const mapStateToProps = state => {
  return {
    background: state.Authentication.background,
    AdvertisementImages: state.AdvertisementImages.homeScreen,
    offersCount: state.Authentication.offersCount,
    nearByLocationsCount: state.Authentication.nearByLocationsCount
  };
};
export default connect(mapStateToProps, { clearSearchResult, searchText })(SearchRestaurantsTab);
