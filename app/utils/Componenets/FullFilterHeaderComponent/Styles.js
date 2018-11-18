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
  optionText: {
    fontSize: responsiveFontSize(1.2)
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
  },
  subHeaderText: {
    fontSize: responsiveFontSize(1.5),
    alignSelf: 'center',
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2)
  },
  lineDivider: {
    borderRightWidth: 2,
    borderColor: '#000000',
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(2),
    height: responsiveHeight(5),
    width: responsiveWidth(1)
  },
  horizontalLine: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: '#000000',
    marginTop: responsiveHeight(1),
    paddingRight: responsiveWidth(13),
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(40)
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
    justifyContent: 'space-around',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2
  },
  numberOfItems: {
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(4.5)
  },
  menuOption: {
    marginRight: responsiveWidth(4)
  },
  optionsContainer: {
    height: responsiveHeight(12),
    flex: 1
  },
  filterOption: {
    flexDirection: 'row',
    flex: 1
  },
  searchOption: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(45),
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
  },
  searchOptionText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    alignSelf: 'center',
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2)
  },
  logisticsImage: {
    width: responsiveWidth(15),  
    height: responsiveHeight(12)
  },
  categoryIcon: {
    transform: [{ rotate: '-90deg' }],
  }
};
/**
 * Used for styling context menu component.
 * 
 * @constant filterMenuOptionsStyles
 * @type {object}
 */
const filterMenuOptionsStyles = {
  optionsContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    height: responsiveHeight(70),
    marginTop: responsiveHeight(9),
    width: responsiveWidth(60),
    marginLeft: responsiveWidth(5),
  },
  optionText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5)
  },
  optionsWrapper: {
    backgroundColor: '#ffffff',
    paddingTop: responsiveHeight(5)
  },
  optionWrapper: {
    width: responsiveWidth(55),
    height: responsiveHeight(5),
    alignItems: 'flex-end',
    paddingRight: responsiveWidth(10)
  }
};
/**
 * Used for styling context menu component.
 * 
 * @constant optionservicesOptionsStylessStyles
 * @type {object}
 */
const categorizationOptionsStyles = {
  optionsContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    height: responsiveHeight(70),
    marginTop: responsiveHeight(9),
    marginLeft: responsiveWidth(40),
    width: responsiveWidth(60)
  },
  optionText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5)
  },
  optionsWrapper: {
    backgroundColor: '#ffffff',
    paddingTop: responsiveHeight(5)
  },
  optionWrapper: {
    alignItems: 'flex-end',
    paddingRight: responsiveWidth(10)
  }
};
export { Styles, categorizationOptionsStyles, filterMenuOptionsStyles };
