import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling FilterHeader components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  advertisement: {
    alignItems: 'center',
    height: responsiveHeight(10)
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  iconStyle: {
    height: responsiveHeight(5),
    width: responsiveWidth(9)
  },
  divider: {
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(1),
    marginTop: responsiveHeight(2)
  },
  headerText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.3),
    alignSelf: 'center',
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5)
  },
  lineDivider: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRightWidth: 2,
    borderColor: '#000000',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(2),
    height: responsiveHeight(5),
    width: responsiveWidth(1)
  },  
  menuIconStyle: {
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2.5),
    paddingTop: responsiveHeight(1.5)
  },  
  menuStyle: {
    backgroundColor: '#FFDE00',
    elevation: 5,
    flexDirection: 'row',
    height: responsiveHeight(8.5),
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2
  },
  numberOfItems: {
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(4.5)
  },
  searchOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(5)
  },
  searchOptionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2)
  },
  logisticsImage: {
    width: responsiveWidth(15),  
    height: responsiveHeight(12)
  }
};
/**
 * Used for styling context menu component.
 * 
 * @constant locationsOptionsStyles
 * @type {object}
 */
const locationsOptionsStyles = {
  optionsContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#FFDE00',
    height: responsiveHeight(70),
    marginTop: responsiveHeight(9),
    width: responsiveWidth(50)
  },
  optionText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5)
  },
  optionsWrapper: {
    backgroundColor: '#FFDE00',
    paddingTop: responsiveHeight(5)
  },
  optionWrapper: {
    alignItems: 'flex-end',
    paddingRight: responsiveWidth(7)
  }
};
/**
 * Used for styling context menu component.
 * 
 * @constant optionservicesOptionsStylessStyles
 * @type {object}
 */
const servicesOptionsStyles = {
  optionsContainer: {
    alignItems: 'center',
    backgroundColor: '#FFDE00',
    marginTop: responsiveHeight(9),
    width: responsiveWidth(100)
  },
  optionText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2)
  },
  optionsWrapper: {
    backgroundColor: '#FFDE00',
    paddingTop: responsiveHeight(5),
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(1)
  },
  optionWrapper: {
    alignItems: 'flex-end',
    marginRight: responsiveWidth(4)
  }
};
export { Styles, servicesOptionsStyles, locationsOptionsStyles };
