import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the events screen components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  advertisement: {
    backgroundColor: '#ffde00',
    height: responsiveHeight(20),
    width: responsiveWidth(80)
  },
  lineDivider: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRightWidth: 2,
    borderColor: '#f07dae',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(2),
    height: responsiveHeight(15),
    width: responsiveWidth(1)
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  footer: {
    backgroundColor: '#ffde00',
    bottom: 0,
    height: responsiveHeight(7),
    justifyContent: 'flex-end',
    position: 'absolute',
    width: responsiveWidth(100)
  },
  imageStyle: {
    width: responsiveWidth(70),
    height: responsiveHeight(40),
    marginTop: responsiveHeight(3)
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 0.25
  },
  itemsSection: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: responsiveHeight(20),
    justifyContent: 'space-around',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(100)
  },
  itemSectionContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 0.4,
    height: responsiveHeight(20),
    justifyContent: 'center',
    paddingTop: responsiveHeight(5),
    width: responsiveWidth(100)
  },
  itemSectionText: {
    color: '#f07dae',
    fontSize: responsiveFontSize(2.1)
  },
  itemText: {
    color: '#e30613',
    fontSize: responsiveFontSize(1.8)
  },
  offerSection: {
    backgroundColor: '#ffde00',
    height: responsiveHeight(50),
    alignItems: 'center',
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    paddingRight: responsiveWidth(5),
    paddingLeft: responsiveWidth(5),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(85)
  },
  sharingSectionContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 0.65,
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(5),
    paddingTop: responsiveHeight(5),
    width: responsiveWidth(100)
  },
  sharingText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2)
  },
  section: {
    width: responsiveWidth(100),
    height: responsiveHeight(65),
    marginTop: responsiveHeight(5),
    alignItems: 'center'
  },
  sectionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.6)
  },
  subSection: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(20),
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  subSectionStyle: {
    alignItems: 'center',
    flex: 1
  },
  textContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(1)
  },
  iconStyle: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(15),
    height: responsiveHeight(12)
  },
  contentHeaderText: {
    color: '#000000',
    flex: 0.09,
    fontSize: responsiveFontSize(2.2),
    paddingTop: responsiveHeight(2)
  },
  iconsBar: {
    marginTop: responsiveWidth(3),
    flexDirection: 'row',
    width: responsiveWidth(87)
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
  eventState: {
    color: '#BE1622',
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1)
  },
  dayStyle: {
    color: '#BE1622',
    fontSize: responsiveFontSize(4),
    marginBottom: responsiveHeight(1)
  },
  textInfoStyle: {
    color: '#0000ff',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1)
  },
  horizontalLine: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: '#e30613',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80)
  }
};
export default Styles;
