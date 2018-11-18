import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  setTotalCost,
  setTotalDeliveryCost
} from './../../actions/index';
import Styles from './Styles';
import { OrderItem } from './index';
/**
 * Defines OrderList class
 * @class OrderList
 * @extends {Component}
 */
class OrderList extends Component {
  /**
 * @constructor
 * @param {object} props Used for passing data throw the class component.
 */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     */
    this.state = {
      isModalVisible: false,
      mobileNumber: null,
      address: null,
      promptVisible: false
    };
  }
  /**
   * Called when the component is about to mount.
   * Use to dispatch the setTotalCost and setTotalDeliveryCost actions
   * 
   * @returns Void
   */
  componentWillMount() {
    this.props.setTotalCost();
    this.props.setTotalDeliveryCost();
  }
  /** 
   * Used to set the visiblety of the module to true.
   * 
   * @returns Void
   */
  showModal = () => this.setState({ isModalVisible: true });
  /** 
   * Used to set the visiblety of the module to false.
   * 
   * @returns Void
   */
  hideModal = () => this.setState({ isModalVisible: false })
  /**
   * Used to render the list item.
   *  
   * @returns {ReactElement} FlatList item
   */
  renderFlatListItem(item) {
    return (
      <OrderItem item={item} />
    );
  }
  /**
   * Used to render the flat list component.
   *  
   * @returns {ReactElement} FlatList.
   */
  renderContent() {
    if (this.props.cartItems.length > 0) {
      return (
        <FlatList
          data={this.props.cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => this.renderFlatListItem(item)}
        />
      );
    }
    return <Text style={Styles.emptyText}>The orders cart is currently empty</Text>;
  }
  /**
   * Used to send an order of dishes
   * 
   * @returns Void
   */
  sendOrder() {
    Actions.sendOrderScreen({ orderedDishes: this.props.cartItems });
  }
  /**
   * Used to render the orders list component
   * 
   * @returns {ReactElement} OrderList component
   */
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          {this.renderContent()}
        </View>
        <View style={Styles.summaryStyle}>
          <Text style={Styles.costTitle}>الاجمالي</Text>
          <Text style={Styles.cost}>{this.props.totalCost}</Text>
          <Text style={Styles.total}>NIS</Text>
          <TouchableOpacity
            onPress={() => this.sendOrder()}
            style={Styles.sendButton}
          >
            <Text style={Styles.sendText}>ارسل الطلب</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
/**
 * Used to pass the Cart store state to the OrderList class.
 * 
 * @param {object} state The redux store state.
 * @param {int} state.Cart.addedItems The returned addedItems.
 * @param {int} state.Cart.totalCost The returned totalCost.
 * @param {int} state.Cart.deliveryCost The returned deliveryCost.
 * @returns {int} cartItems 
 * @returns {int} totalCost
 * @returns {int} deliveryCost
 */
const mapStateToProps = state => {
  return {
    cartItems: state.Cart.addedItems,
    totalCost: state.Cart.totalCost,
    deliveryCost: state.Cart.deliveryCost
  };
};
export default connect(mapStateToProps, {
  setTotalCost,
  setTotalDeliveryCost
})(OrderList);

