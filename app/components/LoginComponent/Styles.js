import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling login forms components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  advertisement: {
    backgroundColor: '#FFDE00',
    bottom: 0,
    height: responsiveHeight(10),
    justifyContent: 'flex-end',
    width: responsiveWidth(100),
  },
  advertisementText: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(3),
    padding: responsiveHeight(1.5),
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: responsiveHeight(99),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  emailButton: {
    alignItems: 'center',
    backgroundColor: '#ea5b0b',
    height: responsiveHeight(8),
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(4.5),
    width: responsiveWidth(70),
  },
  emailButtonText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(3)
  },
  emailForm: {
    width: responsiveWidth(70),
    marginBottom: responsiveHeight(4),
  },
  iconStyle: {
    alignSelf: 'center',
    width: responsiveWidth(25),
    height: responsiveHeight(20)
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#000000',
    elevation: 1,
    height: responsiveHeight(8),
    marginBottom: responsiveHeight(1), 
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2),
    borderRadius: 10
  },
  emailText: {
    alignSelf: 'flex-end',
    marginBottom: responsiveHeight(0.8), 
    fontSize: responsiveFontSize(2.1)
  },
  infoText: {
    alignSelf: 'flex-end',
    color: '#3a56a0',
    marginBottom: responsiveHeight(0.8), 
    fontSize: responsiveFontSize(2.1)
  },
  footerText: {
    alignSelf: 'center',
    color: '#3a56a0',
    marginBottom: responsiveHeight(0.8), 
    fontSize: responsiveFontSize(2.1)
  },
  infoFooterText: {
    alignSelf: 'center',
    marginBottom: responsiveHeight(0.8), 
    fontSize: responsiveFontSize(2.1)
  },
  emptyView: {
    height: responsiveHeight(4),
    width: responsiveWidth(60),
  },
  errorText: { 
    color: '#e62531',
    fontSize: responsiveFontSize(2.1),
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(0.5), 
  },
  facebookButton: {
    alignItems: 'center',
    backgroundColor: '#3a56a0',
    flexDirection: 'row',
    height: responsiveHeight(10),
    justifyContent: 'center',
    width: responsiveWidth(70),
  },
  facebookText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(3),
    marginRight: responsiveWidth(5),
  },
  formText: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(2),
  },
  gmailButton: {
    alignItems: 'center',
    backgroundColor: '#de4b39',
    flexDirection: 'row',
    height: responsiveHeight(10),
    justifyContent: 'center',
    width: responsiveWidth(70),
  },
  gmailText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(3),
    marginRight: responsiveWidth(2),
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  keyboardViewStyle: {
    flex: 1,
    paddingTop: responsiveHeight(80),
  },
  loginForm: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(100)
  },
  loadingIcon: {
   alignSelf: 'center',
   marginTop: responsiveHeight(3),
   marginBottom: responsiveHeight(3),
  },
  registrationForm: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(7),
    width: responsiveWidth(100)
  },
  horizontalLine: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: '#DADADA',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80)
  },
  footer: {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(100),
    alignItems: 'center'
  }
};
export default Styles;
