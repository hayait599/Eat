import React from 'react';
import {
  Scene,
  Router,
} from 'react-native-router-flux';
import {
  SplashScreen,
  HomeScreen,
  LoginScreen,
  SearchScreen,
  FeaturedScreen,
  ProfileScreen,
  FavoriteRestaurantScreen,
  OffersListScreen,
  OnlineOrderScreen,
  NearbyRestaurantsScreen,
  RestaurantDetailsScreen,
  OrdersListScreen,
  OffersScreen,
  RegistrationScreen,
  SearchDishScreen,
  DishDetailsScreen,
  SearchByServicesScreen,
  OffershDetailsScreen,
  EventsScreen,
  FavoriteOffersScreen,
  EventsDetails,
  TechnicalSupportScreen,
  OnlineSearchScreen,
  RestaurantMenuScreen,
  SettingsScreen,
  SendOrderScreen
} from './../components/index';
import OpenFullPageScreen from './../utils/Componenets/OpenFullPageComponent/OpenFullPageScreen';
/**
 * Used to define the application's routes and scenes. 
 * 
 * @class RouterComponent
 * @returns {ReactElement} Routing Components
 */
const RouterComponent = () => {
  return (
    <Router>
      <Scene >
        <Scene
          key='searchByServicesScreen'
          component={SearchByServicesScreen}
          hideNavBar='true'
          animation='fade'
        />
        <Scene
          key='sendOrderScreen'
          component={SendOrderScreen}
          hideNavBar='true'
          animation='fade'
        />
        <Scene
          key='onlineSearchScreen'
          component={OnlineSearchScreen}
          hideNavBar='true'
          animation='fade'
        />
        <Scene
          key='restaurantMenuScreen'
          component={RestaurantMenuScreen}
          hideNavBar='true'
          animation='fade'
        />
        <Scene
          key='technicalSupportScreen'
          component={TechnicalSupportScreen}
          hideNavBar='true'
          animation='fade'
        />
        <Scene
          key='favoriteOffersScreen'
          component={FavoriteOffersScreen}
          hideNavBar='true'
        />
        <Scene
          key='settingsScreen'
          component={SettingsScreen}
          hideNavBar='true'
        />
        <Scene
          key='searchDishScreen'
          component={SearchDishScreen}
          hideNavBar='true'
        />
        <Scene
          key='eventsDetails'
          component={EventsDetails}
          hideNavBar='true'
        />
        <Scene
          key='eventsScreen'
          component={EventsScreen}
          hideNavBar='true'
        />
        <Scene
          key='openFullPageScreen'
          component={OpenFullPageScreen}
          hideNavBar='true'
        />
        <Scene
          key='offershDetailsScreen'
          component={OffershDetailsScreen}
          hideNavBar='true'
          animation='fade'
        />
        <Scene
          key='offersScreen'
          component={OffersScreen}
          hideNavBar='true'
          animation='fade'
        />
        <Scene
          key='dishDetailsScreen'
          component={DishDetailsScreen}
          hideNavBar='true'
        />
        <Scene
          key='registrationScreen'
          component={RegistrationScreen}
          hideNavBar='true'
        />
        <Scene
          key='splashScreen'
          component={SplashScreen}
          hideNavBar='true'
          animation='fade'
          initial='true'
        />
        <Scene
          key='loginScreen'
          component={LoginScreen}
          hideNavBar='true'
        />
        <Scene
          key='homeScreen'
          component={HomeScreen}
          hideNavBar='true'
        />
        <Scene
          key='searchScreen'
          component={SearchScreen}
          hideNavBar='true'
        />
        <Scene
          key='profileScreen'
          component={ProfileScreen}
          hideNavBar='true'
        />
        <Scene
          key='favoriteRestaurantScreen'
          component={FavoriteRestaurantScreen}
          hideNavBar='true'
        />
        <Scene
          key='featuredScreen'
          component={FeaturedScreen}
          hideNavBar='true'
        />
        <Scene
          key='offersListScreen'
          component={OffersListScreen}
          hideNavBar='true'
        />
        <Scene
          key='onlineOrderScreen'
          component={OnlineOrderScreen}
          hideNavBar='true'
        />
        <Scene
          key='nearbyRestaurantsMapScreen'
          component={NearbyRestaurantsScreen}
          hideNavBar='true'
        />
        <Scene
          key='restaurantDetailsScreen'
          component={RestaurantDetailsScreen}
          hideNavBar='true'
        />
        <Scene
          key='ordersListScreen'
          component={OrdersListScreen}
          hideNavBar='true'
        />
      </Scene>
    </Router>
  );
};
export default RouterComponent;