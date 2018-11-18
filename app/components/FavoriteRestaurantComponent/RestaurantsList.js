import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Realm from 'realm';
import { connect } from 'react-redux';
import { FavoriteItem } from './../ProfileComponent/index';
import RestaurantItem from './../../utils/Componenets/RestaurantItem/RestaurantItem';
import Styles from './Styles';

const favIcon = require('./../../images/FavIcon.png');

class RestaurantsList extends Component {
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
    const id = item.id;
    return (
      <RestaurantItem
        backgroundColor='#DADADA'
        color='#000000'
        iconColor='#DADADA'
        item={item}
        onPress={() => Actions.restaurantDetailsScreen({ id })}
      />
    );
  }
  /** 
   * used to render the restaurant items list if it wasn't empty.
   *  
   * @returns FlatList component.
   * @returns Text component.
   */
  renderContent() {
    if (this.props.restaurantsList.length > 0) {
      return (
        <FlatList
          data={this.props.restaurantsList}
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
          iconName={favIcon}
          firstDescription='مطاعمي المفضلة'
          secondDescription='My Favorite'
          thirdDescription='Restaurants'
        />
        <Text style={Styles.itemText} >
          {this.props.favoriteIds.length}
        </Text>
        {this.renderContent()}
      </View>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantsList class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {object} props
 */
const mapStateToProps = state => {
  return {
    favoriteIds: state.RestaurantData.restaurantsId
  };
};
export default connect(mapStateToProps)(RestaurantsList);

