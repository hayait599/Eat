import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import Styles from './Styles';

const favIcon = require('./../../images/FavIcon.png');
const Adv = require('./../../images/Adv.png');
/**
 * Used to define the favorite items component for the favorite section component
 * @class FavoriteItem
 * @returns {ReactElement} Favorite Item component for the favorite restaurants section
 */
class FavoriteItem extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the favorite item component
   */
  constructor(props) {
    super(props);
    /**
     * @type {object} 
     * @property {string} action Defines the action to be performed after clicking on the icon 
     * @property {string} iconName Defines the name of the icon 
     * @property {string} description Defines the icon description
     * @property {string} counter Defines the number of found results
     */
    this.state = {
      action: this.props.action,
      iconName: this.props.iconName,
      description: this.props.description,
      counter: this.props.counter,
    };
  }
  /** 
   * Used to render to the favorite item component.
   * 
   * @returns {ReactElement}
   */
  render() {
    return (
      <View style={Styles.itemContainer}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image
            style={Styles.profileIcon}
            source={this.state.iconName}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <View style={Styles.textContainer}>
          <Text style={Styles.itemText} >{this.props.firstDescription}</Text>
          <Text style={Styles.itemText} >{this.props.secondDescription}</Text>
          <Text style={Styles.itemText} >{this.props.thirdDescription}</Text>
          <Text style={Styles.itemText} >{this.state.counter}</Text>
        </View>
      </View>
    );
  }
}
export { FavoriteItem };
