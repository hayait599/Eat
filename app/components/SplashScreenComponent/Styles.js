import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the splash screen component
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  footerStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: responsiveHeight(15)
  },
  headerStyle: {
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10)
  },
  imageStyle: {
    height: responsiveHeight(13),
    alignSelf: 'center',
    width: responsiveHeight(13)
  },
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: responsiveHeight(5),
    width: responsiveWidth(70)
  },
  subLineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'center',
    width: responsiveWidth(10)
  },
  logoStyle: {
    fontSize: responsiveFontSize(2),
    color: '#000000'
  },
  mainStyle: {
    alignItems: 'center',
    backgroundColor: '#FFCB0C',
    flex: 1,
    paddingTop: responsiveHeight(5),
    flexDirection: 'column',
    justifyContent: 'center'
  },
  spinnerStyle: {
    marginTop: responsiveHeight(10)
  },
  bodyStyle: {
    marginTop: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(20)
  }
};
export default Styles;
