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
    marginRight: responsiveWidth(10),
    marginBottom: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: responsiveHeight(13),
    alignSelf: 'center',
    width: responsiveHeight(13)
  },
  subImageStyle: {
    height: responsiveHeight(5),
    alignSelf: 'center',
    width: responsiveHeight(5)
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
  logoSubStyle: {
    fontSize: responsiveFontSize(2),
    color: '#E40C29'
  },
  mainStyle: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: responsiveHeight(5),
    flexDirection: 'column',
    justifyContent: 'center'
  },
  spinnerStyle: {
    marginTop: responsiveHeight(10)
  },
  bodyStyle: {
    alignItems: 'center',
    width: responsiveWidth(70),
    height: responsiveHeight(20)
  }
};
export default Styles;
