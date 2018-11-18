import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
/**
 * Used for styling nearby restaurants map components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  modalStyle: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 1
  },
  customView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    paddingTop: responsiveHeight(1),
    width: responsiveWidth(40),
  },
  descriptionTextStyle: {
    fontSize: responsiveFontSize(1),
  },
  iconsBar: {
    flexDirection: 'row',
  },
  mapContainer: {
    flex: 1,
  },
  modalInputText: {
    alignSelf: 'center',
    borderWidth: responsiveWidth(1), 
    borderColor: '#e62531',
    backgroundColor: '#e62531', 
    height: responsiveHeight(6),
    paddingBottom: responsiveHeight(0.3),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    paddingTop: responsiveHeight(0.3),
    width: responsiveWidth(50),
  },
  nameTextStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5),
  },
};
export default Styles;

