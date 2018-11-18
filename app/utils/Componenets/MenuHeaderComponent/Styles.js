import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling menu header components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  advertisement: {
    alignItems: 'center',
    height: responsiveHeight(10),  
  },
  headerStyle: {
    backgroundColor: '#DADADA',
    height: responsiveHeight(10),  
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: responsiveWidth(1),
    paddingTop: responsiveHeight(1)
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  iconStyle: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },
  headerIcon: {
    width: responsiveWidth(10),
    height: responsiveHeight(10),
  },
  subIconStyle: {
    width: responsiveWidth(5),
    height: responsiveHeight(5),
  },
  supportIcon: {
    marginLeft: responsiveWidth(15),
    width: responsiveWidth(40),
    height: responsiveHeight(7),
    alignItems: 'flex-end'
  },
  divider: {
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(1),
    marginTop: responsiveHeight(2),
  },
  lineDivider: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#f07dae',
    marginTop: responsiveHeight(1),
    width: responsiveWidth(60),
  },  
  manuIconStyle: {
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2.5),
    paddingTop: responsiveHeight(1.5),
  },  
  manuStyle: {
    backgroundColor: '#FFDE00',
    elevation: 5,
    flexDirection: 'row',
    height: responsiveHeight(8.5),
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
  },
  numberOfItems: {
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(4.5),
  },
  menuOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  searchOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2.2),
    marginRight: responsiveWidth(1),
  },
  searchOptionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2)
  },
};
/**
 * Used for styling context menu component.
 * 
 * @constant optionsStyles
 * @type {object}
 */
const optionsStyles = {
  optionsContainer: {
    alignItems: 'center',
    backgroundColor: '#ffff00',
    marginTop: responsiveHeight(8),
    width: responsiveWidth(77),
  },
  optionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2)
  },
  optionsWrapper: {
    width: responsiveWidth(77),
    backgroundColor: '#ffffff',
    flex: 1,
  },
  optionWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: responsiveWidth(4),
  },
};
export { Styles, optionsStyles };
