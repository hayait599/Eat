import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling featured restaurants screen components
 * @constant Styles
 * @type {object}
 */
const Styles = { 
  container: {
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    backgroundColor: '#ffffff',
    flex: 1
  },
  iconsBar: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(1)
  },
  imgContainer: {
    flex: 0.8
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: responsiveHeight(25),
    marginBottom: responsiveHeight(0.5),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(0.5),
    marginTop: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(0.5),
    paddingTop: responsiveHeight(1),
    width: responsiveWidth(30)
  },
  itemsSection: {
    backgroundColor: '#0000ff',
    height: responsiveHeight(30),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(100)
  },
  itemSectionContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: responsiveWidth(100)
  },
  containerList: {
    alignItems: 'center',
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  itemSectionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.1),
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(0.4)
  },
  lineDivider: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#000000',
    marginBottom: responsiveHeight(1),
    width: responsiveWidth(90)
  },
  restaurantStateText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(1)
  },
  spinnerStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
    justifyContent: 'center',
    width: responsiveWidth(100)
  },
  scrollStyle: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  iconStyle: {
    height: responsiveHeight(17),
    width: responsiveWidth(27)
  },
  subIconStyle: {
    height: responsiveHeight(8),
    width: responsiveWidth(8)
  },
  subItemText: {
    color: '#E71D73',
    fontSize: responsiveFontSize(1.2)
  }
};
export { Styles };
