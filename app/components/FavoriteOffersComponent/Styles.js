import { 
  responsiveFontSize, 
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the OffersListScreen component
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: responsiveHeight(2),
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start'
  },
  itemText: {
    color: '#f07dae',
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center'
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
    alignSelf: 'center',
    color: '#000000',
    fontSize: responsiveFontSize(2.2),  
    justifyContent: 'center'
  },
  restaurantImage: {
    height: responsiveHeight(30),
    width: responsiveWidth(80)
  },
  emptyText: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1)
  },
  iconStyle: {
    marginTop: responsiveHeight(5),
    width: responsiveWidth(15),
    height: responsiveHeight(12)
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
