import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import Styles from './Styles';
/**
 * Defines the icon component for the icons bar
 * 
 * @class Icon
 * @returns {ReactElement} IconComponent 
 */
class IconComponent extends Component {

  render() {
    const color = this.props.color;
    return (
      <View style={Styles.iconStyle}>
        <TouchableOpacity
          onPress={this.props.onIconPress}
          style={Styles.circleIcon}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: color,
              borderRadius: responsiveWidth(8) / 2,
              height: responsiveWidth(8),
              justifyContent: 'center',
              width: responsiveWidth(8)
            }}
          >
            <Icon
              name={this.props.iconName}
              color={this.props.iconColor}
              size={responsiveFontSize(2.5)}
            />
          </View>
        </TouchableOpacity>
        <Text 
          style={{     
            color,
            fontSize: responsiveFontSize(1.2),  
          }}
        >
          {this.props.iconText}
        </Text>
      </View>
    );
  }
}
export { IconComponent };
