import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the restaurant item component
 * @constant Styles
 * @type {object}
 */
const Styles = {
  cardSection: {
    flex: 0.51,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    width: responsiveWidth(87),
  },
  circleIcon: {
    alignItems: 'center',
    backgroundColor: '#e62531',
    borderRadius: responsiveWidth(8) / 2,
    height: responsiveWidth(8),
    justifyContent: 'center',
    width: responsiveWidth(8),
  },    
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: responsiveHeight(30),
    marginBottom: responsiveHeight(0.5),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    width: responsiveWidth(98),
  },
  detailsSection: {
    alignItems: 'flex-end',
    flex: 0.7,
    flexDirection: 'column',
    height: responsiveHeight(11),
    justifyContent: 'flex-start',
    paddingRight: responsiveWidth(2),
  },
  detailStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5), 
  },
  iconBar: {
    width: responsiveWidth(87),
    flex: 0.1,
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.45,
    flexDirection: 'column', 
  },
  iconText: {
    color: '#e62531',
    fontSize: responsiveFontSize(1.2), 
  },
  imageModal: {
    flex: 1,
    height: responsiveHeight(34),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
  },
  imageSection: {
    flex: 0.3,
    height: responsiveHeight(11),
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  restaurantName: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
  },  
  restaurantType: {
    color: '#c9c9c9',
    fontSize: responsiveFontSize(1.5), 
  },
  lineDivider: {
    alignItems: 'center',
    alignSelf: 'center',
    borderLeftWidth: 2,
    borderColor: '#000000',
    marginRight: responsiveWidth(1),
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    height: responsiveHeight(10),
    width: responsiveWidth(1)
  }
};
export default Styles;
