export const environments = {
  'development': {
    'host': 'https://eatps.herokuapp.com/api',
    'CDN': 'https://eat.ps'
    // define any other value here
  },
  'production': {
    'host': 'https://eatps.herokuapp.com/api',
    'CDN': 'https://eat.ps'
  }
};

export const routes = {
  login: '/login',
  singup: '/register',
  logout: '/logout',
  search: '/searchRestaurant',
  search_dish: '/searchDish',
  restaurant: '/restaurantDetails',
  near_by_search: '/getNearByLocation',
  ads: '/getAdvertisement',
  rating: '/storeRating',
  evaluation: '/storeEvaluation',
  dish: '/dishDetails',
  featured_restaurants: '/featuredRestaurants',
  locations: '/getLocations',
  offers: '/getAllOffers',
  searchByServiceAndLocation: '/getRestaurantsByServiceAndLocation',
  latestOffers: '/getLatestOffers',
  kitchenTypes: '/getKitchens',
  allEvents: '/getAllEvents',
  dynamicBackground: '/getDynamicBackground',
  forgotPassword: '/forgotPassword', 
  offersCount: '/getOffersCount',
  onlineSearch: '/getMatchingRestaurants',
  nearbyRestaurantsCount: '/getNearbyRestaurantsCount',
  dishPhoto: '/clients/images/dishes/',
  filteredRestaurants: '/getFilteredRestaurants',
  restaurantMenu: '/getMenu',
  background: '/clients/images/restPhotos/',
  restaurantPhoto: '/admin/images/comlogos/', 
  offersPhoto: '/clients/images/imgads/',
  events: '/clients/images/eventsPics/',
  relatedDishes: '/getRelatedDishes',
  sendOrder: '/sendOrder',
  registerViaFacebook: '/registerViaFacebook',
  enableNotifications: '/postNotificationToken',
  disableNotifications: '/deleteNotificationToken'
};
export const getEnv = (env) => {

  // You might need to check here for NODE_ENV value 
  if (!env) {
    env = process.env.NODE_ENV || 'production';
  }

  switch (env) {
    case 'development':
    case 'production':
      return environments[env];
    default:
      return environments.production;
  }
};

export const getRoute = (route) => getEnv().host + routes[route];
export const getCDNRoute = (route) => getEnv().CDN + routes[route];
