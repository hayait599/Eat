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
    height: responsiveHeight(10),
    alignSelf: 'center',
    width: responsiveHeight(10)
  },
  shareImageStyle: {
    height: responsiveHeight(9),
    alignSelf: 'center',
    width: responsiveHeight(9)
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
    alignSelf: 'center',
    fontSize: responsiveFontSize(2),
    color: '#000000'
  },
  logoSubStyle: {
    fontSize: responsiveFontSize(2),
    color: '#E40C29'
  },
  mainStyle: {
    paddingTop: responsiveHeight(5),
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  spinnerStyle: {
    marginTop: responsiveHeight(10)
  },
  bodyStyle: {
    marginBottom: responsiveHeight(3),
    alignItems: 'center',
    width: responsiveWidth(75)
  },
  textInput: {
    borderWidth: 1,
    alignSelf: 'center',
    width: responsiveWidth(60),
    borderColor: '#000000',
    elevation: 1,
    height: responsiveHeight(20),
    marginBottom: responsiveHeight(1), 
    marginTop: responsiveHeight(1),  
    paddingBottom: responsiveHeight(1),
    borderRadius: 10
  },
  iconsBar: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(2)
  }
};
export default Styles;
