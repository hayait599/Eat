import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import { Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MenuHeader from './../MenuHeaderComponent/MenuHeader';
import Styles from './Styles';
/**
 * Defines Open full page screen component.
 * 
 * @class OpenFullPageScreen
 * @extends {Component}
 */
class OpenFullPageScreen extends Component {
  /**
   * Used to OpenFullPageScreen component.
   * 
   * @returns {ReactElement}  component
   */
  render() {
    if (this.props.imageUrl) {
      return (
        <MenuHeader
          onBackPress={() => Actions.pop()}
          thirdIconName='arrow-left'
          secondIconName='shopping-cart'
        >
          <Card>
            <CardItem>
              <Image
                style={Styles.imageStyle}
                source={{ uri: this.props.imageUrl }}
                resizeMode='contain'
              />
            </CardItem>
          </Card>
        </MenuHeader>
      );
    }
  }
}
export default OpenFullPageScreen;
