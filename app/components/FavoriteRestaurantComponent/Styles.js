import { 
  responsiveHeight,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the favorite restaurant screen components.
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
  emptyListText: {
    fontSize: responsiveFontSize(2)
  },
  restaurantsList: {
    marginTop: responsiveHeight(1.5)
  }
};
export default Styles;
