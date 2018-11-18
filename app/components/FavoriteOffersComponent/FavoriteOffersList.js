import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Realm from 'realm';
import { FavoriteItem } from './../ProfileComponent/index';
import { FavoriteOfferItem } from './index';
import Styles from './Styles';

const adv = require('./../../images/Adv.png');
/**
 * Defines FavoriteOffersList component
 * 
 * @class FavoriteOffersList
 * @extends {Component}
 */
class FavoriteOffersList extends Component {
  /** 
   * Called when the component is about to mount 
   * used to add an event listner that listens to the database changes.
   * 
   * @returns Void
   */
  componentWillMount() {
    this.realm.addListener('change', this.forceComponentUpdate);
  }
  /** 
   * Called when the component is about to unmount 
   * used to remove the database event listener.
   * 
   * @returns Void
   */
  componentWillUnmount() {
    this.realm.removeListener('change', this.forceComponentUpdate);
  }

  realm = new Realm();
  /** 
   * used to force the component to update.
   *  
   * @returns Void
   */
  forceComponentUpdate = () => this.forceUpdate();
  /** 
   * used to render the restaurant item component.
   *  
   * @param item Holds the item data.
   * 
   * @returns RestaurantItem component.
   */
  renderFlatListItem(item) {
    return (
      <FavoriteOfferItem
        item={item}
      />
    );
  }
  /** 
   * used to render the restaurant items list if it wasn't empty.
   *  
   * @returns FlatList component.
   */
  renderContent() {
    if (this.props.offers.length > 0) {
      return (
        <FlatList
          data={this.props.offers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => this.renderFlatListItem(item)}
        />
      );
    }
  }
  /** 
   * used to render the content of the favorite restaurants screen.
   *  
   * @returns FlatList component.
   */
  render() {
    return (
      <View style={Styles.restaurantsList}>
        <FavoriteItem
          iconName={adv}
          firstDescription='مفضلة الاعلانات'
          secondDescription='My Favorite'
          thirdDescription='Offers'
        />
        <Text style={Styles.itemText}>
          {this.props.favoriteIds.length}
        </Text>
        {this.renderContent()}
      </View>
    );
  }
}
/**
 * Used to pass the store state to the FavoriteOffersList class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    favoriteIds: state.RestaurantData.offersId
  };
};
export default connect(mapStateToProps)(FavoriteOffersList);
