import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
/**
 * Used for styling the restaurant details screen components.
 * 
 * @constant Styles
 * @type {object}
 */
const Styles = {
  addButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#e30613',
    borderRadius: 5,
    borderWidth: 1,
    height: responsiveHeight(6),
    justifyContent: 'center',
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(0.5),
    paddingBottom: responsiveHeight(0.5),
    paddingTop: responsiveHeight(0.5),
    width: responsiveWidth(12)
  },
  arrowsContainerStyle: {
    marginBottom: responsiveHeight(3),
    marginLeft: responsiveWidth(3.5),
    marginTop: responsiveHeight(10),
    marginRight: responsiveWidth(3.5)
  },
  barStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#e30613',
    flex: 0.3,
    marginTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(0.5),
    paddingLeft: responsiveWidth(0.5),
    paddingTop: responsiveHeight(0.5),
    paddingRight: responsiveWidth(0.5)
  },
  buttonTextStyle: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2)
  },
  carouselArrowsStyle: {
    color: '#ffffff',
    fontSize: responsiveFontSize(10)
  },
  carouselSlideStyle: {
    flex: 0.9,
    height: responsiveHeight(40)
  },
  carouselStyle: {
    height: responsiveHeight(40), 
    width: responsiveWidth(90)
  },
  container: {
    alignItems: 'center',
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  detailsStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: responsiveHeight(0.5),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(5),
    width: responsiveWidth(50)
  },
  dishDetail: {
    alignItems: 'flex-start',
    marginLeft: responsiveWidth(5),
    width: responsiveWidth(51)
  },
  dishExtraInformation: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: responsiveWidth(2.2),
    paddingTop: responsiveHeight(1.2)
  },
  dishNameStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(0.8),
    marginTop: responsiveHeight(0.3)
  },
  dishPriceStyle: {
    marginBottom: responsiveHeight(2),
    color: '#e30613',
    fontSize: responsiveFontSize(1.5)
  },
  dishStateStyle: {
    color: '#a8cc49',
    fontSize: responsiveFontSize(1.5)
  },
  dishStyle: {
    fontSize: responsiveFontSize(2)
  },
  evaluationsBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80)
  },
  facebookButton: {
    alignItems: 'center',
    backgroundColor: '#3a56a0',
    flexDirection: 'row',
    height: responsiveHeight(10),
    marginTop: responsiveHeight(5),
    justifyContent: 'center',
    width: responsiveWidth(60)
  },
  facebookText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2),
    marginRight: responsiveWidth(5)
  },
  fullEvaluationText: {
    alignSelf: 'flex-end',
    color: '#1d71b8'
  },
  imageSection: {
    flex: 0.9,
    height: responsiveHeight(11)
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  information: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: responsiveFontSize(2)
  },
  informationTitle: {
    color: '#e30613',
    fontSize: responsiveFontSize(2.5)
  },
  listItemStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#dadada',
    justifyContent: 'space-between',    
    flexDirection: 'row',
    marginBottom: responsiveHeight(0.5),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(0.5),
    marginTop: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(0.5),
    paddingTop: responsiveHeight(1),
    width: responsiveWidth(92)
  },
  listItemDescriptionStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#dadada',
    justifyContent: 'space-between',    
    flexDirection: 'row',
    marginBottom: responsiveHeight(0.5),
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(0.5),
    marginTop: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(0.5),
    paddingLeft: responsiveWidth(3.5),
    paddingTop: responsiveHeight(2),
    paddingRight: responsiveWidth(3.5),
    width: responsiveWidth(85)
  },
  listItemText: {
    fontSize: responsiveFontSize(2),
    marginRight: responsiveWidth(2)
  },
  itemText: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(2.5),
    color: '#000000',
    marginTop: responsiveWidth(2),
    marginBottom: responsiveWidth(1)
  },
  subItemText: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveWidth(1)
  },
  logisticsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(12),
    flex: 1
  },
  logisticsImage: {
    width: responsiveWidth(15),  
    height: responsiveHeight(12)
  },
  tabsImage: {
    width: responsiveWidth(17),  
    height: responsiveHeight(12),
    marginTop: responsiveHeight(1.5),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2)
  },
  logisticsSection: {
    height: responsiveHeight(40),
    width: responsiveWidth(80), 
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  mapContainer: {
    height: responsiveHeight(30),
    width: responsiveWidth(90)
  },
  menuList: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginTop: responsiveHeight(3)
  },
  progressBarStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(70)
  },
  progressBarTitle: {
    alignSelf: 'flex-end',
    color: '#000000',
    fontSize: responsiveFontSize(2)
  },
  restaurantInfoContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    paddingTop: responsiveHeight(1),
    paddingRight: responsiveWidth(3)
  },
  restaurantState: {
    alignItems: 'center',
    backgroundColor: '#95c11f',
    flex: 0.1,
    height: responsiveHeight(5),
    justifyContent: 'center',
    width: responsiveWidth(100)
  },
  restaurantStateText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2)
  },
  servicesButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  servicesIcon: {
    marginRight: responsiveWidth(5)
  },
  servicesIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: responsiveWidth(25),
    width: responsiveWidth(50)
  },
  tabsSection: {
    width: responsiveWidth(100),
    alignItems: 'center'
  },
  tabsSubSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: responsiveWidth(100),
    alignItems: 'center'
  },
  spinnerStyle: {
    backgroundColor: '#ffffff',
    height: responsiveHeight(90),
    justifyContent: 'center',
    width: responsiveWidth(100)
  },
  tabsContainer: {
    width: responsiveWidth(100), 
    height: responsiveHeight(60)
  },
  thumbnailStyle: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(3)
  },
  workingSchedule: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(70)
  },
  workingTime: {
    color: '#1d71b8',
    fontSize: responsiveFontSize(2)
  },
  workingTimeList: {
    marginTop: responsiveHeight(2),
    height: responsiveHeight(25)
  },
  activeTabStyle: { 
    alignItems: 'center', 
    backgroundColor: '#e30613', 
    flex: 0.3
  }, 
  tabStyle: { 
    alignItems: 'center', 
    backgroundColor: '#ef7980', 
    flex: 0.3
  }, 
  tabTextStyle: { 
    color: '#ffffff', 
    fontSize: responsiveFontSize(2) 
  }, 
  restaurantTab: {
    flex: 1,
    marginBottom: responsiveHeight(5)
  },
  itemContainer: {
    paddingTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1
  },
  cardSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2)
  },
  itemIcon: {
    width: responsiveWidth(7),
    height: responsiveHeight(5)
  },
  iconText: {
    color: '#008D36',
    fontSize: responsiveFontSize(1.4)
  },
  lineDivider: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#f07dae',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    width: responsiveWidth(70)
  },  
  sublineDivider: {
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#f07dae',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    width: responsiveWidth(20)
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
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: responsiveWidth(3),
    marginTop: responsiveWidth(3),
    marginBottom: responsiveHeight(5),
    width: responsiveWidth(90)
  },
  offerDetailsText: {
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    color: '#000000',
    fontSize: responsiveFontSize(2.2), 
    width: responsiveWidth(80),
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
  },  
  serviceSection: {
    backgroundColor: '#008D36',
    alignItems: 'center',
    paddingBottom: responsiveHeight(1),
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
    width: responsiveWidth(100) 
  },
  unAvailableserviceSection: {
    backgroundColor: '#E30613',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    width: responsiveWidth(100) 
  },
  serviceText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(1.7)
  },
  eventsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80)
  },
  eventsSubtitle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dateStyle: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1)
  },
  dayStyle: {
    color: '#BE1622',
    fontSize: responsiveFontSize(3),
    marginBottom: responsiveHeight(1)
  },
  timerIconStyle: {
    width: responsiveWidth(5),
    height: responsiveHeight(5)
  },
  tabText: {
    fontSize: responsiveFontSize(1.7)
  },
  selectedTabText: {
    color: '#f07dae',
    fontSize: responsiveFontSize(1.7)
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center'
  }
};
export default Styles;
