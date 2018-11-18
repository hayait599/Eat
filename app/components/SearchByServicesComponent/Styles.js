import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the search screen components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  iconStyle: {
    marginTop: responsiveHeight(7),
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchResultsNumber: {
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BE1622'
  },
  searchResultsText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2)
  },
  content: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  footer: {
    backgroundColor: '#FFDE00',
    bottom: 0,
    height: responsiveHeight(7),
    justifyContent: 'flex-end',
    position: 'absolute',
    width: responsiveWidth(100)
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  restaurantsList: {
    height: responsiveHeight(70),
    paddingTop: responsiveHeight(2)
  },
  spinnerStyle: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(90),
    justifyContent: 'center',
    width: responsiveWidth(100)
  },
  loadingIcon: {
    height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center'
  }
};
export default Styles;
