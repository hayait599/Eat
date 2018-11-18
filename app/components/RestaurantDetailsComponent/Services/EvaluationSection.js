import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import {
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { web } from 'react-native-communications';
import Styles from './../Styles';
import {
  EvaluationItem
} from './../index';
/**
 * Defines EvaluationSection class .
 * Used to show extra information about the restaurant.
 * 
 * @class EvaluationSection
 * @extends {Component}
 */
class EvaluationSection extends Component {
  /** 
   * Used to open the restaurant website in the browser.
   * 
   * @param {string} url the restaurant website url
   */
  handleWebLinking = (url) => {
    if (url) {
      web(url);
    } else {
      Alert.alert('', 'The restaurant site is not provided');
    }
  };
  /**
   * Used to render the restaurant info component.
   * 
   * @returns {ReactElement} RestaurantInfo component
   */
  render() {
    const { facebook } = this.props.item;
    if (this.props.evaluation) {
      const serviceEvaluation = this.props.evaluation.filter(
        item => item.evaluation_type === 'service'
      );
      const priceEvaluation = this.props.evaluation.filter(
        item => item.evaluation_type === 'price'
      );
      const foodEvaluation = this.props.evaluation.filter(
        item => item.evaluation_type === 'food'
      );
      const servicesEvaluation = this.props.evaluation.filter(
        item => item.evaluation_type === 'logstic'
      );
      if (this.props.evaluation.length > 0) {
        return (
          <View style={Styles.restaurantTab}>
            <View style={Styles.restaurantInfoContainer} >
              <Text style={Styles.informationTitle}>تقيم الخدمات</Text>
              <EvaluationItem
                title={'Services'}
                item={serviceEvaluation[0]}
              />
              <EvaluationItem
                title={'Price'}
                item={priceEvaluation[0]}
              />
              <EvaluationItem
                title={'Food taste'}
                item={foodEvaluation[0]}
              />
              <EvaluationItem
                title={'Logstic services'}
                item={servicesEvaluation[0]}
              />
              <TouchableOpacity onPress={() => this.handleWebLinking(facebook)}>
                <View style={Styles.facebookButton}>
                  <Text style={Styles.facebookText}>
                    Like restuarant page
                    </Text>
                  <Icon
                    name='facebook'
                    color='#ffffff'
                    size={responsiveFontSize(5)}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
      return <View />;
    }
  }
}
/**
 * Used to pass the store state to the EvaluationSection class.
 *
 * @param {object} state The redux store state.
 * 
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    item: state.SearchedData.restaurantItem.restaurant,
    evaluation: state.SearchedData.restaurantItem.restaurant.evaluation,
  };
};
export default connect(mapStateToProps)(EvaluationSection);
