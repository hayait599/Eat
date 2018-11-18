import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  onlineSearch
} from './../../actions/index';
import Styles from './Styles';

const onlineOrder = require('./../../images/OnlineOrder/OnlineOrder.png');
const kitchen = require('./../../images/OnlineOrder/Kitchen.png');
const location = require('./../../images/OnlineOrder/Location.png');
const search = require('./../../images/OnlineOrder/Search.png');
/**
 * Defines OnlineOrderScreen class.
 * 
 * @class OnlineOrderScreen
 * @extends {Component}
 */

 let selectedType = 0;
 let selectedLocation = 0;
 
class OnlineOrderDetails extends Component {

  /**
   * Used to render the kitchen types dropdown menu
   * 
   * @param {object} rowData 
   * 
   * @returns {ReactlementE}
   */
  dropdownRenderRow(rowData) {
    return (
      <TouchableOpacity
        key={rowData.id}
      >
        <View>
          <Text>
            {rowData.arabicName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the kitchen types menu button
   * 
   * @param {object} rowData 
   * 
   * @returns {ReactlementE}
   */
  renderButtonText(rowData) {
    selectedType = rowData.id;
    return rowData.arabicName;
  }
  /**
   * Used to render the locations dropdown menu
   * 
   * @param {object} rowData 
   * 
   * @returns {ReactlementE}
   */
  locationsDropdownRenderRow(rowData) {
    return (
      <TouchableOpacity
        key={rowData.id}
      >
        <View>
          <Text>
            {rowData.location}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  /**
   * Used to render the locations dropdown menu button
   * 
   * @param {object} rowData 
   * 
   * @returns {ReactlementE}
   */
  locationsRenderButtonText(rowData) {
    selectedLocation = rowData.id;
    return rowData.location;
  }
  /**
   * Called when the search button is clicked
   * 
   * @returns Void
   */
  onSearchPressed() {
    if (selectedLocation === 0 && selectedType === 0) {
      Alert.alert('', 'Please select a location or kitchen type');
    } else {
      this.props.onlineSearch(selectedLocation, selectedType);
      Actions.onlineSearchScreen();
    }
  }
  /**
   * Called when the component is about to mount
   * Used to set the default value of the selectedType and
   * selectedLocation variables 
   * 
   * @returns Void
   */
  componentWillUnmount() {
     selectedType = 0;
     selectedLocation = 0;
  }
  /**
   * Used to render the online order screen component.
   * 
   * @returns {ReactElement} OnlineOrderScreen component
   */
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.section}>
          <Image
            style={Styles.iconStyle}
            source={onlineOrder}
            resizeMode='contain'
          />
          <Text style={Styles.sectionText}>اطلب طعامك الان</Text>
          <Text style={Styles.sectionText}>Online food order</Text>
        </View>
        <View style={Styles.detailsSection}>
          <Text style={Styles.sectionText}>
            عزيزي المستخدم يمكنك البحث حسب المنطقة او نوع المطبخ او كلاهما
          </Text>
        </View>
        <View style={Styles.subSection}>
          <View style={Styles.subSectionStyle}>
            <Image
              style={Styles.iconStyle}
              source={kitchen}
              resizeMode='contain'
            />
            <Text style={Styles.itemSectionText}>اضغط لاختيار مطبخ</Text>
            <Text style={Styles.itemSectionText}>Click to select a kitchen</Text>
            <ModalDropdown
              options={this.props.kitchenTypes}
              renderRow={this.dropdownRenderRow.bind(this)}
              renderButtonText={(rowData) => this.renderButtonText(rowData)}
            />
          </View>
          <View style={Styles.subSectionStyle}>
            <Image
              style={Styles.iconStyle}
              source={location}
              resizeMode='contain'
            />
            <Text style={Styles.itemSectionText}>اضغط لاختيار المنطقة</Text>
            <Text style={Styles.itemSectionText}>Click to select a region</Text>
            <ModalDropdown
              options={this.props.locations}
              renderRow={this.locationsDropdownRenderRow.bind(this)}
              renderButtonText={(rowData) => this.locationsRenderButtonText(rowData)}
            />
          </View>
        </View>
          <View style={Styles.detailsSection}>
          <TouchableOpacity onPress={() => this.onSearchPressed()}>
            <Image
              style={Styles.iconStyle}
              source={search}
              resizeMode='contain'
            />
          </TouchableOpacity>
          </View>
      </View>
    );
  }
}

/**
 * Used to pass the store state to the OnlineOrderDetails class.
 * 
 * @param {object} state The redux store state.
 * 
 * @returns {props}
 */
const mapStateToProps = state => {
  return {
    locations: state.SearchedData.locations,
    kitchenTypes: state.SearchedData.kitchenTypes
  };
};
export default connect(mapStateToProps, { onlineSearch })(OnlineOrderDetails);
