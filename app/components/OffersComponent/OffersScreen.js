import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  getOffers,
  getlLatestOffers
} from './../../actions/index';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import Styles from './Styles';

const offerLable = require('./../../images/OfferScreen/OfferLable.png');
const offerIcon = require('./../../images/OfferScreen/OfferIcon.png');
const newOfferIcon = require('./../../images/OfferScreen/NewOfferIcon.png');
/**
 * Defines profile screen component.
 * 
 * @class ProfileScreen
 * @extends {Component}
 */
class OffersScreen extends Component {
  componentWillMount() {
    this.props.getOffers();
    this.props.getlLatestOffers();
  }
  /**
   * Used to render profile screen component.
   * 
   * @returns {ReactElement}  component
   */
  render() {
    return (
      <MenuHeader
        onBackPress={() => Actions.pop()}
        thirdIconName='arrow-left'
        firstIconName='search'
      >
        <View style={Styles.container}>
          <View style={Styles.section}>
            <Image
              style={Styles.iconStyle}
              source={offerLable}
              resizeMode='contain'
            />
            <Text style={Styles.sectionText}>الحملات و العروض</Text>
            <Text style={Styles.sectionText}>Restaurants Offers</Text>
          </View>
          <View style={Styles.subSection}>
            <TouchableOpacity
              onPress={() => Actions.offersListScreen({
                offerTitle: 'جميع العروض و الاعلانات',
              })}
            >
              <View style={Styles.subSectionStyle}>
                <Image
                  style={Styles.iconStyle}
                  source={offerIcon}
                  resizeMode='contain'
                />
                <Text style={Styles.itemSectionText}>جميع العروض و الاعلانات </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.offersListScreen({
                offerTitle: 'اخر العروض و الحملات',
              })}
            >
              <View style={Styles.subSectionStyle}>
                <Image
                  style={Styles.iconStyle}
                  source={newOfferIcon}
                  resizeMode='contain'
                />
                <Text style={Styles.itemSectionText}>احدث العروض و الاعلانات</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </MenuHeader>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    allOffers: state.SearchedData.allOffers,
    latestOffers: state.SearchedData.latestOffers
  };
};
export default connect(mapStateToProps, {
  getOffers,
  getlLatestOffers
})(OffersScreen);
