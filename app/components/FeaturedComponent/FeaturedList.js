import React, { Component } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {
  Styles
} from './Styles';

import FeaturedSection from './FeaturedSection';

/**
 * Defines FeaturedList class.
 * 
 * @class FeaturedList
 * @extends {Component}
 */
class FeaturedList extends Component {
  /**
   * Used to render the locations menu items
   * 
   * @returns {ReactElement} MenuOption
   */
  renderLocationsFlatListItem() {
    const featured = this.props.featured;
    if (featured) {
      return featured.map(item =>
        <FeaturedSection
          key={item.id}
          value={item.id}
          item={item}
        />
      );
    }
  }
  /**
   * Used to render the featured list component.
   *
   * @returns {ReactElement} FeaturedList component
   */
  render() {
    if (this.props.loading || this.props.featured.length < 1) {
      return (
        <View style={Styles.spinnerStyle} >
          <ActivityIndicator size='large' color='#000000' />
        </View>
      );
    }
    return (
      <View style={Styles.containerList} >
        {this.renderLocationsFlatListItem()}
      </View>
    );
  }
}
/**
 * Used to pass the application redux state to the FeaturedList component
 * 
 * @param {Object[]} state The application store state
 * @returns {object[]} Store state
 */
const mapStateToProps = state => {
  return {
    featured: state.SearchedData.featuredRestaurants,
    loading: state.SearchedData.loading,
  };
};
export default connect(mapStateToProps)(FeaturedList);

