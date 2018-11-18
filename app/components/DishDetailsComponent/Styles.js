import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the DishDetailsScreen components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  relatedDishesList: {
    alignItems: 'center',
    marginTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(15)
  },
  itemContainer: {
    paddingTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemText: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(2.5),
    color: '#000000',
    marginTop: responsiveWidth(2),
    marginBottom: responsiveWidth(1)
  },
  subItemText: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveWidth(1)
  },
  container: {
    alignItems: 'center',
    width: responsiveWidth(100),
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  iconBar: {
    width: responsiveWidth(87),
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3)
  },
  imageStyle: {
    width: responsiveWidth(65),
    height: responsiveHeight(35),
    marginTop: responsiveHeight(3)
  },
  subSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  iconStyle: {
    width: responsiveWidth(5),
    height: responsiveHeight(5)
  },
  itemSectionText: {
    color: '#1b994b',
    fontSize: responsiveFontSize(2)
  },
  section: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'space-around' 
  },
  subSectionText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5)
  },
  priceSectionText: {
    color: '#ED1C24',
    fontSize: responsiveFontSize(2)
  },
  sectionText: {
    color: '#E71D73',
    fontSize: responsiveFontSize(2)
  },
  activeTextStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2)
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff'
  },
  spinnerStyle: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(90),
    justifyContent: 'center',
    width: responsiveWidth(100)
  },
  tabStyle: {
    backgroundColor: '#C6C6C6'
  },
  tabTextStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2)
  }
};
export default Styles;
