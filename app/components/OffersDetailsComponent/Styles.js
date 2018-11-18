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
  container: {
    alignItems: 'center',
    width: responsiveWidth(100),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingBottom: responsiveHeight(3)
  },
  iconBar: {
    width: responsiveWidth(87),
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3)
  },
  imageStyle: {
    height: responsiveHeight(35),
    marginTop: responsiveHeight(1), 
    width: responsiveWidth(80)
  },
  itemSectionText: {
    color: '#1b994b',
    fontSize: responsiveFontSize(1.7)
  },
  section: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'space-around' 
  },
  warningText: {
    fontSize: responsiveFontSize(2),
    color: '#e30613',
    alignSelf: 'center',
    paddingLeft: responsiveWidth(10),
    paddingRight: responsiveWidth(10)
  },
  sectionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2)
  },
  spinnerStyle: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(90),
    justifyContent: 'center',
    width: responsiveWidth(100)
  },
  iconStyle: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(15),
    height: responsiveHeight(12)
  },
  imageModal: {
    flex: 1,
    height: responsiveHeight(34),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3)
  }
};
export default Styles;
