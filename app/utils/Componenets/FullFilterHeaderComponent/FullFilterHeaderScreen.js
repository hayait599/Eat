import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import
  Menu, {
  MenuContext,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers
} from 'react-native-popup-menu';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import {
  getLocations,
  getKitchenTypes,
  getFilteredRestaurants,
  restaurantsCategorization
} from './../../../actions/index';
import {
  Styles,
  filterMenuOptionsStyles,
  categorizationOptionsStyles
} from './Styles';
/**
 * Defines the filter header component for all screens
 *
 * @class FilterHeader
 * @extends {Component}
 */
class FullFilterHeaderScreen extends Component {
  /**
   * @constructor
   * @param {object} props Used for passing data to the FilterHeader component
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     */
    this.state = {
      children: this.props.children,
      selectedLocation: { id: 0, location: '' },
      selectedAlcohol: 0,
      selectedSmoking: 0,
      selectedDelivery: 0,
      selectedOption: null,
      selectedType: { id: 0, arabicName: '' },
      isSelected: false,
      openMainMenu: false,
      openLocationsMenu: false,
      openKitchenTypeMenu: false,
      selectionMenu: false,
      selectedHandiCap: 0,
      selectedRating: 0,
      selectedBestTen: 0,
      selectedBeinSport: 0,
      selectedOpenSpaces: 0,
      selectedIsOpen: 0,
      categorizationIndex: null
    };
  }
  /**
   * Called when the component is about to mount 
   * Used to request the available locations
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.getLocations();
    this.props.getKitchenTypes();
  }
  /**
   * Called when the selectionMenu item is pressed
   * 
   * @param {int} value 
   * 
   * @returns Void
   */
  onSubmenuSelected(value) {
    switch (this.state.selectedOption) {
      case 2:
        this.setState({ selectedAlcohol: value });
        this.props.getFilteredRestaurants({
          searchText: this.props.searchText,
          page: 1,
          location: this.state.selectedLocation.id,
          alcohol: value,
          smoking: this.state.selectedSmoking,
          delivery: this.state.selectedDelivery,
          type: this.state.selectedType.id,
        });
        break;
      case 3:
        this.setState({ selectedSmoking: value });
        this.props.getFilteredRestaurants({
          searchText: this.props.searchText,
          page: 1,
          location: this.state.selectedLocation.id,
          alcohol: this.state.selectedAlcohol,
          smoking: value,
          delivery: this.state.selectedDelivery,
          type: this.state.selectedType.id,
        });
        break;
      case 4:
        this.setState({ selectedDelivery: value });
        this.props.getFilteredRestaurants({
          searchText: this.props.searchText,
          page: 1,
          location: this.state.selectedLocation.id,
          alcohol: this.state.selectedAlcohol,
          smoking: this.state.selectedSmoking,
          delivery: value,
          type: this.state.selectedType.id,
        });
        break;
      default: return 0;
    }
    this.setState({ openLocationsMenu: false });
    this.setState({ openKitchenTypeMenu: false });
    this.setState({ selectionMenu: false });
    this.setState({ isSelected: true });
    this.setState({ openMainMenu: true });
  }
  /**
   * Used to close all menus
   * 
   * @returns Void
   */
  onBackdropPress() {
    this.setState({ openLocationsMenu: false });
    this.setState({ openKitchenTypeMenu: false });
    this.setState({ selectionMenu: false });
    this.setState({ isSelected: true });
    this.setState({ openMainMenu: false });
  }
  /**
   * Called when the locationsMenu item is pressed 
   * 
   * @param {object} item 
   * @returns Void
   */
  onLocationsMenuItemSelect(item) {
    this.setState({
      selectedLocation: { id: item.id, name: item.location }
    });
    this.setState({ openLocationsMenu: false });
    this.setState({ openKitchenTypeMenu: false });
    this.setState({ selectionMenu: false });
    this.setState({ isSelected: true });
    this.setState({ openMainMenu: true });
    this.props.getFilteredRestaurants({
      searchText: this.props.searchText,
      page: 1,
      location: item.id,
      alcohol: this.state.selectedAlcohol,
      smoking: this.state.selectedSmoking,
      delivery: this.state.selectedDelivery,
      type: this.state.selectedType.id,
    });
  }
    /**
   * Called when the kitchensTypesMenu item is pressed 
   * 
   * @param {object} item 
   * @returns Void
   */
  onKitchensMenuItemSelect(item) {
    this.setState({
      selectedType: { id: item.id, arabicName: item.arabicName }
    });
    this.setState({ openLocationsMenu: false });
    this.setState({ openKitchenTypeMenu: false });
    this.setState({ selectionMenu: false });
    this.setState({ isSelected: true });
    this.setState({ openMainMenu: true });
    this.props.getFilteredRestaurants({
      searchText: this.props.searchText,
      page: 1,
      location: this.state.selectedLocation.id,
      alcohol: this.state.selectedAlcohol,
      smoking: this.state.selectedSmoking,
      delivery: this.state.selectedDelivery,
      type: item.id,
    });
  }
  /**
   * Used to show the locationsMenu
   * 
   * @returns Void
   */
  onLocationOptionSelected() {
    if (this.props.locations) {
      if (this.props.locations.length > 0) {
        this.setState({ openLocationsMenu: true });
      } else {
        this.setState({ openLocationsMenu: false });
      }
    } else {
      this.setState({ openLocationsMenu: false });
      Alert.alert('', 'Please check yout internet connection and try again');
    }
    this.setState({ openMainMenu: false });
    this.setState({ selectionMenu: false });
    this.setState({ openKitchenTypeMenu: false });
  }
  /**
   * Used to show the Kitchens Type
   * 
   * @returns Void
   */
  onKitchenTypeOptionSelected() {
    if (this.props.kitchenTypes) {
      if (this.props.kitchenTypes.length > 0) {
        this.setState({ openKitchenTypeMenu: true });
      } else {
        this.setState({ openKitchenTypeMenu: false });
      }
    } else {
      this.setState({ openLocationsMenu: false });
      Alert.alert('', 'Please check yout internet connection and try again');
    }
    this.setState({ openMainMenu: false });
    this.setState({ selectionMenu: false });
    this.setState({ openLocationsMenu: false });
  }
  /**
   * Used to se the valu of the selected option
   * 
   * @param {int} id 
   * 
   * @returns Void
   */
  onSelectionOptionsSelected(id) {
    this.setState({ selectedOption: id });
    this.setState({ selectionMenu: true });
    this.setState({ openLocationsMenu: false });
    this.setState({ openKitchenTypeMenu: false });
    this.setState({ openMainMenu: false });
  }
  onCategorizationOptionsSelected(id) {
    switch (id) {
      case 10:
        this.setState({ selectedHandiCap: 1 });
        this.setState({ selectedRating: 0 });
        this.setState({ selectedBestTen: 0 });
        this.setState({ selectedBeinSport: 0 });
        this.setState({ selectedOpenSpaces: 0 });
        this.setState({ selectedIsOpen: 0 });
        this.props.restaurantsCategorization(10);
        break;
      case 11:
        this.setState({ selectedRating: 1 });
        this.setState({ selectedHandiCap: 0 });
        this.setState({ selectedBestTen: 0 });
        this.setState({ selectedBeinSport: 0 });
        this.setState({ selectedOpenSpaces: 0 });
        this.setState({ selectedIsOpen: 0 });
        this.props.restaurantsCategorization(11);
        break;
      case 12:
        this.setState({ selectedRating: 0 });
        this.setState({ selectedHandiCap: 0 });
        this.setState({ selectedBeinSport: 0 });
        this.setState({ selectedOpenSpaces: 0 });
        this.setState({ selectedIsOpen: 0 });
        this.setState({ selectedBestTen: 1 });
        this.props.restaurantsCategorization(12);
        break;
      case 13:
        this.setState({ selectedBeinSport: 1 });
        this.setState({ selectedRating: 0 });
        this.setState({ selectedHandiCap: 0 });
        this.setState({ selectedBestTen: 0 });
        this.setState({ selectedOpenSpaces: 0 });
        this.setState({ selectedIsOpen: 0 });
        this.props.restaurantsCategorization(13);
        break;
      case 14:
        this.setState({ selectedOpenSpaces: 1 });
        this.setState({ selectedBeinSport: 0 });
        this.setState({ selectedRating: 0 });
        this.setState({ selectedHandiCap: 0 });
        this.setState({ selectedBestTen: 0 });
        this.setState({ selectedIsOpen: 0 });
        this.props.restaurantsCategorization(14);
        break;
      case 15:
        this.setState({ selectedIsOpen: 1 });
        this.setState({ selectedOpenSpaces: 0 });
        this.setState({ selectedBeinSport: 0 });
        this.setState({ selectedRating: 0 });
        this.setState({ selectedHandiCap: 0 });
        this.setState({ selectedBestTen: 0 });
        this.props.restaurantsCategorization(15);
        break;
      default: return 0;
    }
  }
  /**
   * Used to render the filter menu options
   * 
   * @returns {ReactElement} MenuOptions
   */
  rendeFilterOptionsListItem() {
    return (
      <View>
        <MenuOption
          value='0'
          text='حسب المنطقة'
          onSelect={() => this.onLocationOptionSelected()}
          customStyles={filterMenuOptionsStyles}
        />
        <MenuOption
          value='1'
          text='حسب نوع المطعم'
          onSelect={() => this.onKitchenTypeOptionSelected()}
          customStyles={filterMenuOptionsStyles}
        />
        <MenuOption
          value='2'
          text='مشروبات كحولية'
          onSelect={() => this.onSelectionOptionsSelected(2)}
          customStyles={filterMenuOptionsStyles}
        />
        <MenuOption
          value='3'
          text='تدخين واراجيل'
          onSelect={() => this.onSelectionOptionsSelected(3)}
          customStyles={filterMenuOptionsStyles}
        />
        <MenuOption
          value='4'
          text='من لديه خدمة توصيل'
          onSelect={() => this.onSelectionOptionsSelected(4)}
          customStyles={filterMenuOptionsStyles}
        />
      </View>
    );
  }
  /**
   * Used to render available or not available menu options.
   * 
   * @returns {ReactElement} MenuOptions
   */
  renderSelectionOptions() {
    return (
      <MenuOptions customStyles={filterMenuOptionsStyles}>
        <ScrollView style={{ flex: 1 }}>
          <MenuOption
            value='1'
            text='متوفر'
            onSelect={() => this.onSubmenuSelected(1)}
            customStyles={filterMenuOptionsStyles}
          />
          <MenuOption
            value='0'
            text='غير متوفر'
            onSelect={() => this.onSubmenuSelected(0)}
            customStyles={filterMenuOptionsStyles}
          />
        </ScrollView>
      </MenuOptions>
    );
  }
  /**
   * Used to render the locations menu options
   * 
   * @returns {ReactElement} MenuOptions
   */
  renderlocations() {
    return (
      <MenuOptions customStyles={filterMenuOptionsStyles}>
        <ScrollView style={{ flex: 1 }}>
          {this.renderLocationsFlatListItem()}
        </ScrollView>
      </MenuOptions>
    );
  }
  /**
 * Used to render the kitchens menu options
 * 
 * @returns {ReactElement} MenuOptions
 */
  renderKitchens() {
    return (
      <MenuOptions customStyles={filterMenuOptionsStyles}>
        <ScrollView style={{ flex: 1 }}>
          {this.renderKitchensFlatListItem()}
        </ScrollView>
      </MenuOptions>
    );
  }

  /**
   * Used to render the selected location
   * 
   * @returns {ReactElement} 
   */
  renderSelectedLocationFilter() {
    if (this.state.selectedLocation.id !== 0) {
      return (
        <View style={filterMenuOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={filterMenuOptionsStyles.optionText}>حسب المنطقة</Text>
              <Text style={Styles.optionText}>
                {this.state.selectedLocation.name}
              </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  renderSelectedKitchenFilter() {
    if (this.state.selectedType.id !== 0) {
      return (
        <View style={filterMenuOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={filterMenuOptionsStyles.optionText}>حسب نوع المطعم</Text>
              <Text style={Styles.optionText}>
                {this.state.selectedType.arabicName}
              </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedAlcoholFilter() {
    if (this.state.selectedAlcohol === 1) {
      return (
        <View style={filterMenuOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={filterMenuOptionsStyles.optionText}>حسب المشروبات الكحولية</Text>
              <Text style={Styles.optionText}>
                يقدم مشروبات كحولية
              </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedDeliveryFilter() {
    if (this.state.selectedDelivery === 1) {
      return (
        <View style={filterMenuOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={filterMenuOptionsStyles.optionText}>خدمة التوصيل</Text>
              <Text style={Styles.optionText}>
                متوفرة
              </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedSmokingFilter() {
    if (this.state.selectedSmoking === 1) {
      return (
        <View style={filterMenuOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={filterMenuOptionsStyles.optionText}>التدخين والاراجيل</Text>
              <Text style={Styles.optionText}>
                مسموح التدخين
              </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedHandiCap() {
    if (this.state.selectedHandiCap === 1) {
      return (
        <View style={categorizationOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={categorizationOptionsStyles.optionText}>
                ملائم لذوي الاحتياجات الخاصة
              </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedBestTen() {
    if (this.state.selectedBestTen === 1) {
      return (
        <View style={categorizationOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={categorizationOptionsStyles.optionText}>حسب المشاهدات </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }

  /**
    * Used to render the selected service.
    * 
    * @returns {ReactElement} 
    */
  renderSelectedRating() {
    if (this.state.selectedRating === 1) {
      return (
        <View style={categorizationOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={categorizationOptionsStyles.optionText}>تصنيف حسب الاراء</Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedBeinSport() {
    if (this.state.selectedBeinSport === 1) {
      return (
        <View style={categorizationOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={categorizationOptionsStyles.optionText}>خدمة Bein Sport </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedOpenSpaces() {
    if (this.state.selectedOpenSpaces === 1) {
      return (
        <View style={categorizationOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={categorizationOptionsStyles.optionText}>مناطق جلوس مفتوحة </Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }
  /**
   * Used to render the selected service.
   * 
   * @returns {ReactElement} 
   */
  renderSelectedIsOpen() {
    if (this.state.selectedIsOpen === 1) {
      return (
        <View style={categorizationOptionsStyles.optionWrapper}>
          <View style={Styles.filterOption}>
            <View>
              <Text style={categorizationOptionsStyles.optionText}>الان مفتوح</Text>
            </View>
            <Icon
              name='x'
              color='#ff0000'
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      );
    }
  }

  /**
   * Used to render the categorization menu options
   * 
   * @returns {ReactElement} MenuOptions
   */
  rendeCategorizationOptionsListItem() {
    return (
      <View>
        <MenuOption
          value='0'
          text='ملائم لذوي الاحتياجات الخاصة'
          onSelect={() => this.onCategorizationOptionsSelected(10)}
          customStyles={categorizationOptionsStyles}
        />
        <MenuOption
          value='1'
          text='تصنيف حسب الاراء'
          onSelect={() => this.onCategorizationOptionsSelected(11)}
          customStyles={categorizationOptionsStyles}
        />
        <MenuOption
          value='2'
          text='ترتيب حسب المشاهدات'
          onSelect={() => this.onCategorizationOptionsSelected(12)}
          customStyles={categorizationOptionsStyles}
        />
        <MenuOption
          value='3'
          text='خدمة Bein Sport'
          onSelect={() => this.onCategorizationOptionsSelected(13)}
          customStyles={categorizationOptionsStyles}
        />
        <MenuOption
          value='4'
          text='مناطق جلوس مفتوحة'
          onSelect={() => this.onCategorizationOptionsSelected(14)}
          customStyles={categorizationOptionsStyles}
        />
        <MenuOption
          value='5'
          text='الان مفتوح'
          onSelect={() => this.onCategorizationOptionsSelected(15)}
          customStyles={categorizationOptionsStyles}
        />
      </View>
    );
  }
  /**
   * used to render the categorization options list.
   * 
   * @returns {ReactElement} 
   */
  renderCategorizationOptionsList() {
    return (
      <MenuOptions customStyles={categorizationOptionsStyles}>
        <ScrollView style={{ flex: 1 }}>
          <View style={Styles.searchOption}>
            <Text style={Styles.headerText}>تصفية النتائج</Text>
            <Icon
              style={Styles.categoryIcon}
              name='bar-chart'
              color='#000000'
              size={responsiveFontSize(3)}
            />
          </View>
          {this.renderSelectedHandiCap()}
          {this.renderSelectedRating()}
          {this.renderSelectedBestTen()}
          {this.renderSelectedBeinSport()}
          {this.renderSelectedOpenSpaces()}
          {this.renderSelectedIsOpen()}
          <View style={Styles.horizontalLine} />
          {this.rendeCategorizationOptionsListItem()}
        </ScrollView>
      </MenuOptions>
    );
  }
  /**
   * used to render the filter options list.
   * 
   * @returns {ReactElement} 
   */
  renderFilterOptionsList() {
    if (this.state.isSelected) {
      return (
        <MenuOptions customStyles={filterMenuOptionsStyles}>
          <ScrollView style={{ flex: 1 }}>
            <View style={Styles.searchOption}>
              <Text style={Styles.searchOptionText}>تمت تنقية النتائج حسب</Text>
              <Icon
                name='filter'
                color='#000000'
                size={responsiveFontSize(3)}
              />
            </View>
            {this.renderSelectedLocationFilter()}
            {this.renderSelectedKitchenFilter()}
            {this.renderSelectedAlcoholFilter()}
            {this.renderSelectedSmokingFilter()}
            {this.renderSelectedDeliveryFilter()}
            <View style={Styles.horizontalLine} />
            {this.rendeFilterOptionsListItem()}
          </ScrollView>
        </MenuOptions>
      );
    }
    return (
      <MenuOptions customStyles={filterMenuOptionsStyles}>
        <ScrollView style={{ flex: 1 }}>
          <View style={Styles.searchOption}>
            <Text style={Styles.headerText}>ابدأ بتنقية النتائج</Text>
            <Icon
              name='filter'
              color='#000000'
              size={responsiveFontSize(3)}
            />
          </View>
          <View style={Styles.horizontalLine} />
          {this.rendeFilterOptionsListItem()}
        </ScrollView>
      </MenuOptions>
    );
  }
  /**
   * Used to render the kitchens menu items
   * 
   * @returns {ReactElement} MenuOption
   */
  renderKitchensFlatListItem() {
    const kitchenTypes = this.props.kitchenTypes;
    if (kitchenTypes) {
      if (kitchenTypes.length > 0) {
        return kitchenTypes.map(item =>
          <MenuOption
            key={item.id}
            value={item.id}
            text={item.arabicName}
            onSelect={() => this.onKitchensMenuItemSelect(item)}
            customStyles={filterMenuOptionsStyles}
          />
        );
      }
    }
  }
  /**
   * Used to render the locations menu items
   * 
   * @returns {ReactElement} MenuOption
   */
  renderLocationsFlatListItem() {
    const locations = this.props.locations;
    if (locations) {
      if (locations.length > 0) {
        return locations.map(item =>
          <MenuOption
            key={item.id}
            value={item.id}
            text={item.location}
            onSelect={() => this.onLocationsMenuItemSelect(item)}
            customStyles={filterMenuOptionsStyles}
          />
        );
      }
    }
  }

  /**
   * Used to render the drop down menu header component
   *
   * @returns {ReactElement} MenuHeader component
   */
  render() {
    return (
      <MenuContext>
        <View style={Styles.menuStyle}>
          <Menu
            name='categorization'
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger>
              <View style={Styles.searchOption}>
                <Text style={Styles.headerText}>تصفية النتائج</Text>
                <Icon
                  style={Styles.categoryIcon}
                  name='bar-chart'
                  color='#000000'
                  size={responsiveFontSize(3)}
                />
              </View>
            </MenuTrigger>
            {this.renderCategorizationOptionsList()}
          </Menu>
          <View style={Styles.lineDivider} />
          <Menu
            name='filtering'
            onSelect={value => this.selectOptionType(value)}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger>
              <View style={Styles.searchOption}>
                <View>
                  <Text style={Styles.headerText}>تنقية النتائج</Text>
                  <Text style={Styles.subHeaderText}>
                    عدد النتائج المسترده {this.props.restaurants.length}
                  </Text>
                </View>
                <Icon
                  name='filter'
                  color='#000000'
                  size={responsiveFontSize(5)}
                />
              </View>
            </MenuTrigger>
            {this.renderFilterOptionsList()}
          </Menu>
          <Menu
            name='locationsMenu'
            onBackdropPress={() => this.onBackdropPress()}
            opened={this.state.openLocationsMenu}
            onSelect={value => this.selectOptionType(value)}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger />
            {this.renderlocations()}
          </Menu>
          <Menu
            name='kitchensTypesMenu'
            onBackdropPress={() => this.onBackdropPress()}
            opened={this.state.openKitchenTypeMenu}
            onSelect={value => this.selectOptionType(value)}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger />
            {this.renderKitchens()}
          </Menu>
          <Menu
            onBackdropPress={() => this.onBackdropPress()}
            name='selectionMenu'
            opened={this.state.selectionMenu}
            onSelect={value => this.selectOptionType(value)}
            renderer={renderers.NotAnimatedContextMenu}
          >
            <MenuTrigger />
            {this.renderSelectionOptions()}
          </Menu>
        </View>
        {this.state.children}
      </MenuContext>
    );
  }
}
/**
 * Used to pass the store state to the RestaurantItem class.
 * 
 * @param {object} state The redux store state.
 * @param {object[]} state.SearchedData.locations The returned access token.
 * @returns {object[]} props
 */
const mapStateToProps = state => {
  return {
    locations: state.SearchedData.locations,
    kitchenTypes: state.SearchedData.kitchenTypes,
    restaurants: state.SearchedData.restaurants,
    page: state.RestaurantData.pageNumber
  };
};
export default connect(mapStateToProps, {
  getLocations,
  getKitchenTypes,
  getFilteredRestaurants,
  restaurantsCategorization
})(FullFilterHeaderScreen);
