import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the online order screen components
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  advertisement: {
    backgroundColor: '#FFDE00',
    height: responsiveHeight(20),
    width: responsiveWidth(80)
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
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
    fontSize: responsiveFontSize(1.9)
  },
  itemText: {
    color: '#e30613',
    fontSize: responsiveFontSize(1.8)
  },
  offerSection: {
    backgroundColor: '#v',
    height: responsiveHeight(50),
    alignItems: 'center',
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    paddingRight: responsiveWidth(5),
    paddingLeft: responsiveWidth(5),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(85), 
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
    fontSize: responsiveFontSize(2),
  },
  section: {
    width: responsiveWidth(100),
    height: responsiveHeight(20),
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'space-around' 
  },
  detailsSection: {
    width: responsiveWidth(80),
    height: responsiveHeight(15),
    marginTop: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center' 
  },
  sectionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
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
};
export default Styles;
