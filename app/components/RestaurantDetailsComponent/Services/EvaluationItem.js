import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import * as Progress from 'react-native-progress';
import { 
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux';
import { 
  storeServicesEvaluation
} from './../../../actions/index';
import Styles from './../Styles';
/**
 * Defines EvaluationItem class.
 * 
 * @class EvaluationItem
 * @extends {Component}
 */
class EvaluationItem extends Component {
  /** 
   * @constructor 
   * @param {object} props Used for passing data to the MenuHeader component 
   */
  constructor(props) {
    super(props);
    /** 
     * @type {object} 
     * @property {ReactElement} color Defines the like button color 
     */
    this.state = {
      color: '#b3b2b2',
      isClicked: false
    };
  }
  /**
   * Used to send evaluation requests.
   * 
   * @returns Void
   */
  onLikePress() {
    if (this.props.item) {
      const id = this.props.item.restaurant_id;
      const type = this.props.item.evaluation_type;
      if (this.state.isClicked) {
        this.props.storeServicesEvaluation(id, 'remove', type);
        this.setState({ isClicked: false });
        this.setState({ color: '#b3b2b2' });
      } else {
        this.props.storeServicesEvaluation(id, 'add', type);
        this.setState({ isClicked: true });
        this.setState({ color: '#1d71b8' });
      }
    }
  }
  /**
   * Used to render the evaluation list component.
   * 
   * @returns {ReactElement} EvaluationItem component
   */
  render() {
    let evaluation; 
    let evaluationValue;
    if (this.props.item) { 
      evaluation = this.props.item.evaluators_count; 
      evaluationValue = this.props.item.evaluation_value; 
    } else { 
      evaluation = 0; 
      evaluationValue = 0;
    } 
    return (
      <View>
        <Text style={Styles.progressBarTitle}>{this.props.title}</Text>
        <View style={Styles.progressBarStyle} >
        <TouchableOpacity onPress={() => this.onLikePress()}>
            <Icon
              name='like'
              size={responsiveFontSize(5)}
              color={this.state.color}
            />
          </TouchableOpacity>
          <View style={Styles.barStyle} >
            <Text>{evaluation}</Text>
            <View>
              <Progress.Bar 
                progress={evaluationValue / 100}  
                width={responsiveWidth(40)} 
              /> 
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(null, { storeServicesEvaluation })(EvaluationItem);
