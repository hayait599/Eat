import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling orders list screen components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = { 
  addButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#e30613',
    borderRadius: 5,
    borderWidth: 1,
    height: responsiveHeight(3),
    justifyContent: 'center',
    paddingBottom: responsiveHeight(0.5),
    paddingLeft: responsiveWidth(0.5),
    paddingTop: responsiveHeight(0.5),
    paddingRight: responsiveWidth(0.5),
    width: responsiveWidth(7)
  },
  emptyText: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.5)
  },
  removeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#e30613',
    borderRadius: 5,
    borderWidth: 1,
    height: responsiveHeight(5),
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    paddingBottom: responsiveHeight(0.5),
    paddingTop: responsiveHeight(0.5),
    width: responsiveWidth(10)
  },
  content: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  contentDetails: {
    marginTop: responsiveHeight(4),
    width: responsiveWidth(100), 
    height: responsiveHeight(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  cost: {
    color: '#e30613',
    fontSize: responsiveFontSize(1.5)
  },
  costTitle: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5)
  },
  ordersListStyle: {
    marginTop: responsiveHeight(1.5),
    width: responsiveWidth(100),
    height: responsiveHeight(64)
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    elevation: 1,
    height: responsiveHeight(6),
    marginBottom: responsiveHeight(1), 
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2)
  },
  modalBody: {
    justifyContent: 'center',
    width: responsiveWidth(70),
    marginBottom: responsiveHeight(5),
    marginTop: responsiveHeight(1),
    marginRight: responsiveWidth(1),
    marginLeft: responsiveWidth(10)
  },
  inputText: {
    marginBottom: responsiveHeight(0.8), 
    fontSize: responsiveFontSize(2.1)
  },
  detailsStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: responsiveHeight(0.5),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(5),
    width: responsiveWidth(50)
  },
  dishExtraInformation: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: responsiveWidth(1), 
    marginLeft: responsiveWidth(2.2),
    paddingTop: responsiveHeight(1.2)
  },
  dishPriceStyle: {
    marginBottom: responsiveHeight(2),
    marginRight: responsiveWidth(1), 
    marginLeft: responsiveWidth(1),
    color: '#e30613',
    fontSize: responsiveFontSize(1.5)
  },
  dishStateStyle: {
    color: '#a8cc49',
    fontSize: responsiveFontSize(1.5)
  },
  dishStyle: {
    fontSize: responsiveFontSize(2)
  },
  numberOfOrderedItems: {
    marginTop: responsiveHeight(1.5),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  numberOfItems: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(1.5),
    marginRight: responsiveWidth(1.5)
  },
  restaurantName: {
    alignSelf: 'flex-end',
    color: '#000000',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(0.3),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(6),
    marginTop: responsiveHeight(0.3)
  },
  sendButton: {
    alignItems: 'center',
    backgroundColor: '#e30613',
    height: responsiveHeight(5),
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
    width: responsiveWidth(80)
  },
  sendOrderButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#e30613',
    height: responsiveHeight(5),
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
    width: responsiveWidth(60)
  },
  sendText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2)
  },
  summaryStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 0.17,
    paddingBottom: responsiveHeight(2),
    paddingLeft: responsiveWidth(3.5),
    paddingTop: responsiveHeight(1),
    paddingRight: responsiveWidth(3.5)
  },
  total: {
    color: '#a8cc49',
    fontSize: responsiveFontSize(1.5)
  },
  titleText: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: responsiveFontSize(1.7)
  },
  thumbnailStyle: {
    marginTop: responsiveHeight(3)
  },
  dishDetail: {
    alignItems: 'flex-start',
    width: responsiveWidth(51),
    marginLeft: responsiveWidth(5)
  },
  dishNameStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(0.8),
    marginTop: responsiveHeight(0.3)
  },
  listItemStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#dadada',
    justifyContent: 'space-between',    
    flexDirection: 'row',
    marginBottom: responsiveHeight(0.5),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(0.5),
    marginTop: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(0.5),
    paddingLeft: responsiveWidth(0.5),
    paddingTop: responsiveHeight(1),
    paddingRight: responsiveWidth(1.5),
    width: responsiveWidth(92)
  },
  headerIcon: {
    width: responsiveWidth(20),
    height: responsiveHeight(15)
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
};
export default Styles;
