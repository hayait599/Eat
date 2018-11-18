import { 
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the search screen components
 * @constant Styles
 * @type {object}
 */
const Styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  content: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
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
    flex: 1,
    height: undefined,
    width: undefined
  },
  restaurantsList: {
    height: responsiveHeight(80),
    marginTop: responsiveHeight(2.5)
  },
  spinnerStyle: {
    height: responsiveHeight(90),
    paddingTop: responsiveHeight(15),
    width: responsiveWidth(100)
  },
  loadingIcon: {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center'
  }
};
export default Styles;
