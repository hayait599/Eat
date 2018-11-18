import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the profile screen components
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
    backgroundColor: '#ffffff',
    paddingBottom: responsiveHeight(2),
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  footer: {
    backgroundColor: '#FFDE00',
    bottom: 0,
    height: responsiveHeight(7),
    justifyContent: 'flex-end',
    position: 'absolute',
    width: responsiveWidth(100)
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: responsiveHeight(20)
  },
  itemsSection: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(100)
  },
  itemSectionContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 0.6,
    height: responsiveHeight(20),
    justifyContent: 'center',
    paddingTop: responsiveHeight(2),
    width: responsiveWidth(100)
  },
  itemSectionText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(0.4)
  },
  itemText: {
    color: '#f07dae',
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center'
  },
  shareItemText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8)
  },
  sharingButton: {
    alignItems: 'center',
    backgroundColor: '#e30613',
    height: responsiveHeight(5),
    justifyContent: 'center',
    width: responsiveWidth(80)
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
  textContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(1)
  },
  headerIcon: {
    height: responsiveHeight(25),
    width: responsiveWidth(30)
  },
  subItemSectionText: {
    color: '#f07dae',
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(0.4)
  },
  profileIcon: {
    height: responsiveHeight(10),
    width: responsiveWidth(19)
  },
  horizontalLine: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: '#DADADA',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(80)
  }
};
export default Styles;
