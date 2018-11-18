import React, { Component } from 'react';
import {
  Tab,
  Tabs
} from 'native-base';
import MenuHeader from './../../utils/Componenets/MenuHeaderComponent/MenuHeader';
import { SearchRestaurantsTab } from './index';
import SearchDishTab from './FindDishTabComponent/SearchDishTab';
import Styles from './Styles';
/**
 * Defines the home screen Component
 * @class HomeScreen
 * @extends {Component}
 */
class HomeScreen extends Component {
  /**
   * Used to render the home screen component
   * 
   * @returns {ReactElement} HomeScreen component
   */
  render() {
    return (
      <MenuHeader
        secondIconName='shopping-cart'
      >
        <Tabs initialPage={1}>
          <Tab
            activeTabStyle={Styles.activeTabStyle}
            activeTextStyle={Styles.activeTextStyle}
            tabStyle={Styles.tabStyle}
            textStyle={Styles.tabTextStyle}
            heading='ابحث عن طبق'
          >
            <SearchDishTab />
          </Tab>  
          <Tab
            activeTabStyle={Styles.activeTabStyle}
            activeTextStyle={Styles.activeTextStyle}
            tabStyle={Styles.tabStyle}
            textStyle={Styles.tabTextStyle}
            heading='ابحث عن مطعم'
          >
            <SearchRestaurantsTab />
          </Tab>
        </Tabs>
      </MenuHeader>
    );
  }
}
export default HomeScreen;
