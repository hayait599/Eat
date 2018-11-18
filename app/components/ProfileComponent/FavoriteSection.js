import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setup } from './../../actions/index';
import { FavoriteItem } from './index';
import Styles from './Styles';

const useIcon = require('./../../images/UseIcon.png');
const favIcon = require('./../../images/FavIcon.png');
const Adv = require('./../../images/Adv.png');

/**
 * Used to define the favorite section component for the profile screen.
 * 
 * @class FavoriteSection
 * 
 * @extends {Component}
 */
class FavoriteSection extends Component {
  /**
   * Used to render FavoriteSection component.
   * 
   * @returns {ReactElement}  component
   */
  render() {
    return (
      <View style={Styles.container}>
        <Image
          style={Styles.headerIcon}
          source={useIcon}
          resizeMode='contain'
        />
        <Text style={Styles.itemSectionText}>ملف المستخدم</Text>
        <Text style={Styles.itemSectionText}>User Profile</Text>
        <Text style={Styles.subItemSectionText}>{this.props.userInfo}</Text>
        <View style={Styles.itemsSection}>
          <View>
            <FavoriteItem
              iconName={Adv}
              firstDescription='مفضلة الاعلانات'
              secondDescription='My Favorite'
              thirdDescription='Offers'
              onPress={() => Actions.favoriteOffersScreen()}
            />
            <Text style={Styles.itemText}>
              {this.props.favoriteIds.length}
            </Text>
          </View>
          <View>
            <FavoriteItem
              iconName={favIcon}
              firstDescription='مطاعمي المفضلة'
              secondDescription='My Favorite'
              thirdDescription='Restaurants'
              onPress={() => Actions.favoriteRestaurantScreen()}
            />
            <Text style={Styles.itemText} >
              {this.props.restaurantsId.length}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    userInfo: state.Authentication.userInfo,
    restaurantsId: state.RestaurantData.restaurantsId,
    favoriteIds: state.RestaurantData.offersId
  };
};
export default connect(mapStateToProps)(FavoriteSection);
