import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the EventsDetails components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  eventState: {
    color: '#BE1622',
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1)
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingTop: responsiveHeight(5)
  },
  dayStyle: {
    color: '#BE1622',
    fontSize: responsiveFontSize(4),
    marginBottom: responsiveHeight(1)
  },
  iconStyle: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(15),
    height: responsiveHeight(12)
  },
  offersContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 0.8,
    justifyContent: 'space-around',
    marginLeft: responsiveWidth(3),
    marginTop: responsiveWidth(3),
    marginBottom: responsiveHeight(5),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    paddingTop: responsiveHeight(1),
    width: responsiveWidth(90)
  },
  offerDetailsText: {
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    alignSelf: 'center',
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    justifyContent: 'center'
  },
  restaurantImage: {
    height: responsiveHeight(30),
    width: responsiveWidth(80)
  },
  restaurantName: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1)
  },
  dateStyle: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1)
  }
};
export default Styles;
