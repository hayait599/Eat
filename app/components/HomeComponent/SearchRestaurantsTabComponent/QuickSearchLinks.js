import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Styles from './../Styles';
/**
 * Used to define quick search links component.
 * 
 * @class QuickSearchLinks 
 * @param props Used for passing data to the QuickSearchLinks component
 * @returns {ReactElement} QuickSearchLinks component
 */
const QuickSearchLinks = (props) => {
  return (
    <View style={Styles.bodyStyle}>
      <View style={Styles.textContainer}>
        <Text style={Styles.fistTabTextNum}>{props.number} </Text>
        <Text style={Styles.fistTabText}>{props.title}</Text>
        <Image
          style={Styles.iconStyle}
          source={props.icon}
          resizeMode='contain'
        />
      </View>
    </View>
  );
};
export { QuickSearchLinks };
