import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { OfferItem } from './index';
import Styles from './Styles';

const offerIcon = require('./../../images/OfferScreen/OfferIcon.png');

let offers = [];

/**
 * Defines offer screen component
 * 
 * @class OffersListScreen
 * @extends {Component}
 */
class OffersList extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data throw the class component.
   */
  constructor(props) {
    super(props);
    if (this.props.offerTitle === 'جميع العروض و الاعلانات') {
      offers = this.props.allOffers;
    } else {
      offers = this.props.latestOffers;
    }
  }
  /**
   * Used to render the offers list item component.
   * 
   * @returns {ReactElement} OfferItem component
   */
  renderFlatListItem(item) {
    return (
      <OfferItem
        item={item}
        onPress={() => Actions.offershDetailsScreen({ item })}
      />
    );
  }
  rendersScreen() {
    if (this.props.loading || this.props.offerTitle.length < 1) {
      return (
        <View style={Styles.spinnerStyle} >
          <ActivityIndicator size='large' color='#000000' />
        </View>
      );
    }
    if (this.props.offerTitle === 'جميع العروض و الاعلانات') { 
      return ( 
        <FlatList 
          data={this.props.allOffers} 
          keyExtractor={(item) => item.id} 
          renderItem={({ item }) => this.renderFlatListItem(item)} 
        /> 
      );   
    } 
    return (
      <FlatList
        data={this.props.latestOffers} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => this.renderFlatListItem(item)}
      />
    );
  }
  /**
   * Used to render favorite offers screen component
   * 
   * @returns {ReactElement} OffersListScreen component
   */
  render() {
    return (
      <View style={Styles.container}>
        <Image
          style={Styles.iconStyle}
          source={offerIcon}
        />
        <Text style={Styles.contentHeaderText}>{this.props.offerTitle}</Text>
        {this.rendersScreen()}
      </View>
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
    latestOffers: state.SearchedData.latestOffers,
    loading: state.SearchedData.loading
  };
};
export default connect(mapStateToProps)(OffersList);
