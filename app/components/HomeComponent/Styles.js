import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling home screen components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  activeTabStyle: {
    backgroundColor: '#FFDE00',
    borderColor: '#FFDE00'
  },
  iconStyle: {
    marginLeft: responsiveWidth(2),
    width: responsiveWidth(7),
    height: responsiveHeight(7)
  },
  mainIconStyle: {
    marginLeft: responsiveWidth(2),
    width: responsiveWidth(20),
    height: responsiveHeight(10)
  },
  activeTextStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2)
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#e30613',
    borderRadius: 5,
    borderWidth: 1,
    height: responsiveHeight(6),
    justifyContent: 'center',
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    paddingBottom: responsiveHeight(0.5),
    paddingTop: responsiveHeight(0.5),
    width: responsiveWidth(12)
  },
  advertisement: {
    bottom: 0,
    backgroundColor: '#FFDE00',
    alignItems: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(100)
  },
  bodyContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#FFDE00',
    flex: 0.7,
    paddingRight: responsiveWidth(8),
    paddingTop: responsiveHeight(5)
  },
  bodyStyle: {
    justifyContent: 'center',
    width: responsiveWidth(70),
    alignItems: 'flex-end'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: responsiveWidth(100)
  },
  detailsStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: responsiveHeight(0.5),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(5),
    width: responsiveWidth(50)
  },
  dishbodyContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    flex: 0.8,
    paddingRight: responsiveWidth(2),
    paddingTop: responsiveHeight(2)
  },
  dishDetail: {
    alignItems: 'flex-start',
    marginLeft: responsiveWidth(5),
    width: responsiveWidth(51)
  },
  dishExtraInformation: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: responsiveWidth(2.2),
    paddingTop: responsiveHeight(1.2)
  },
  dishNameStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(0.8),
    marginTop: responsiveHeight(0.3)
  },
  dishPriceStyle: {
    marginBottom: responsiveHeight(2),
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
  dishSearchBarStyle: {
    alignItems: 'center',
    backgroundColor: '#95c11f',
    flex: 0.2,
    justifyContent: 'center'
  },
  dishesList: {
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(5),
    flex: 1,
    height: responsiveHeight(60)
  },
  firstTab: {
    backgroundColor: '#000000',
    height: responsiveHeight(82),
    width: responsiveWidth(100)
  },
  fistTabText: {
    color: '#000000',
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2.5)
  },
  fistTabTextNum: {
    marginTop: responsiveHeight(2),
    color: '#e30613',
    fontSize: responsiveFontSize(2)
  },
  loadingIcon: {
    height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined
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
    paddingTop: responsiveHeight(1),
    width: responsiveWidth(92)
  },
  lineDivider: {
    borderBottomWidth: 1,
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(80)
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
  searchBar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: responsiveHeight(10),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(1),
    paddingRight: responsiveWidth(1),
    paddingTop: responsiveHeight(2),
    width: responsiveWidth(80)
  },
  searchBarStyle: {
    alignItems: 'center',
    backgroundColor: '#95c11f',
    flex: 0.55,
    justifyContent: 'center',
    resizeMode: 'stretch'
  },
  searchTextInput: {
    fontSize: responsiveFontSize(1.8), 
    height: responsiveHeight(8),
    width: responsiveWidth(60)
  },
  tabStyle: {
    backgroundColor: '#BCA108'
  },
  tabTextStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
  },
  textContainer: {
    flexDirection: 'row'
  },
  thumbnailStyle: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(3)
  },
  backgroundImage: {
  flex: 1,
  resizeMode: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
  },
  onlineOrderText: {
    color: '#f07dae',
    marginRight: responsiveHeight(1),
    fontSize: responsiveFontSize(1)
  }
};
export default Styles;
