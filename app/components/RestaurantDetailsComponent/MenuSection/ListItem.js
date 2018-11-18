import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';
import { 
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import { selectedMenuItem } from './../../../actions/index';
import Styles from './../Styles';
/**
 * Defines ListItem class .
 * 
 * @class ListItem
 * @extends {Component}
 */
class ListItem extends Component {
  /**
   * @constructor
   * @param props Used for passing data to the ListItem component
   */  
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {string} arrowIcon Used for toggling the item left arrow.
     */    
    this.state = {
      arrowIcon: 'arrow-down',
    };
  }
  /**
   * Used to render the menu dishes list item.
   * 
   * @returns {ReactElement} MenuItem component.
   */
  renderFlatListItem(item) {
    return (
      <MenuItem
        item={item}
      />
    );
  }
  /**
   * Used to render the menu dishes list.
   * 
   * @returns {ReactElement} FlatList component.
   */
  renderDescription() {
    const { id } = this.props.item;
    if (id === this.props.selectedMenuId) {
      return (
        <FlatList 
          data={this.props.item.dishes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => this.renderFlatListItem(item)}
        />
      );
    }
  }
  /**
   * Used to render the arrow icon component.
   * 
   * @returns {ReactElement} Icon component
   */
  renderIcon() {
    if (this.props.item.id === this.props.selectedMenuId) {
      return (
        <Icon
          style={Styles.servicesIcon}
          name='arrow-up'
          color='#e62531'
          size={responsiveFontSize(2.4)}
        />
      ); 
    } 
    return (
      <Icon
        style={Styles.servicesIcon}
        name='arrow-down'
        color='#e62531'
        size={responsiveFontSize(2.4)}
      />
    );
  }
  /**
   * Used to render the restaurant menu list item.
   * 
   * @returns {ReactElement} ListItem component
   */
  render() {
    const { id, category } = this.props.item;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectedMenuItem(id)}
      >  
        <View>
          <View style={Styles.listItemStyle}>
            {this.renderIcon()}  
            <Text style={Styles.listItemText}>{category}</Text>
          </View>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
/**
 * Used to pass the store state to the ListItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object} state.SelectedMenuId The selected menu Item id
 * @returns {int} selectedMenuId props
 */
const mapStateToProps = state => {
  return {
    selectedMenuId: state.SelectedId.selectedMenuItem,
  };
};
export default connect(mapStateToProps, { selectedMenuItem })(ListItem);
