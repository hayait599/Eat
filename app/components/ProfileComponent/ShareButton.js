import React from 'react';
import { 
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
/**
 * Defines the sharing button component for the sharing section component.
 * 
 * @class ShareButton
 * @param props Used for passing data to the share button component
 * @returns {ReactElement} ShareButton component
 */
const ShareButton = (props) => {
  return (
    <View style={Styles.itemContainer}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            style={Styles.profileIcon}
            source={props.iconName}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <View style={Styles.textContainer}>
          <Text style={Styles.shareItemText} >
            {props.firstDescription}
          </Text>
        </View>
      </View>  
  ); 
};
export { ShareButton };
