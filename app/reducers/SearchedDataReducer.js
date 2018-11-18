import {
  ADD_DISHES,
  ADD_RESTAURANTS,
  STORE_RESTAURANT_DETAILS,
  SEARCH_LOADING,
  CLEAR_SEARCH,
  SEARCH_DETAILS_LOADING,
  STORE_DISH_DETAILS,
  STORE_FEATURED_RESTAURANTS,
  STORE_RESTAURANTS_LOCATIONS,
  STORE_KITCHEN_TYPES,
  STORE_ALL_OFFERS,
  STORE_LATEST_OFFERS,
  STORE_EVENTS
} from './../constants/ActionTypes'; 

const initialState = { 
  dishes: [],
  restaurants: [],
  restaurantItem: [],
  dishItem: [],
  loading: false,
  featuredRestaurants: [],
  locations: [],
  allOffers: [],
  latestOffers: [],
  kitchenTypes: [],
  events: [],
  detailsLoading: true
};
/**
 * @returns {object} SearchedData state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_EVENTS: 
    return { 
      ...state,
      events: action.payload,
      loading: state.loading,
      dishes: [...state.dishes, ...action.payload],
      restaurants: state.restaurants,
      restaurantItem: state.restaurantItem,
      kitchenTypes: state.kitchenTypes,
      dishItem: state.dishItem,
      featuredRestaurants: state.featuredRestaurants,
      locations: state.locations,
      detailsLoading: state.detailsLoading,
      allOffers: state.allOffers,
      latestOffers: state.latestOffers
    };
    case ADD_DISHES: {
      return { 
        ...state,
        loading: state.loading,
        events: state.events,
        dishes: [...state.dishes, ...action.payload],
        restaurants: state.restaurants,
        restaurantItem: state.restaurantItem,
        kitchenTypes: state.kitchenTypes,
        dishItem: state.dishItem,
        featuredRestaurants: state.featuredRestaurants,
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
    }
    case ADD_RESTAURANTS: {
      return { 
        ...state,
        loading: state.loading,
        events: state.events,
        kitchenTypes: state.kitchenTypes,
        dishes: state.dishes,
        restaurants: [...state.restaurants, ...action.payload], 
        restaurantItem: state.restaurantItem,
        dishItem: state.dishItem,
        featuredRestaurants: state.featuredRestaurants,
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
    }
    case CLEAR_SEARCH: {
      return { 
        ...state,
        loading: state.loading,
        events: state.events,
        kitchenTypes: state.kitchenTypes,
        dishes: [],
        restaurants: [],
        restaurantItem: [],
        dishItem: [],
        featuredRestaurants: [],
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
    }
    case STORE_RESTAURANT_DETAILS: {
      return { 
        ...state,
        loading: state.loading,
        events: state.events,
        kitchenTypes: state.kitchenTypes,
        dishes: state.dishes,
        restaurants: state.restaurants,
        restaurantItem: action.payload,
        dishItem: state.dishItem,
        featuredRestaurants: state.featuredRestaurants,
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };  
    } 
    case STORE_DISH_DETAILS: {
      return { 
        ...state,
        loading: state.loading,
        events: state.events,
        kitchenTypes: state.kitchenTypes,
        dishes: state.dishes,
        restaurants: state.restaurants,
        restaurantItem: state.restaurantItem,
        dishItem: action.payload,
        featuredRestaurants: state.featuredRestaurants,
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };  
    }    
    case SEARCH_LOADING:
      return { 
        ...state,
        loading: action.payload,
        events: state.events,
        kitchenTypes: state.kitchenTypes,
        dishes: state.dishes,
        restaurants: state.restaurants,
        restaurantItem: state.restaurantItem,
        dishItem: state.dishItem,
        featuredRestaurants: state.featuredRestaurants,
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
    case SEARCH_DETAILS_LOADING:
      return {
        ...state,
        loading: state.loading,
        events: state.events,
        dishes: state.dishes,
        kitchenTypes: state.kitchenTypes,
        restaurants: state.restaurants,
        restaurantItem: state.restaurantItem,
        dishItem: state.dishItem,
        featuredRestaurants: state.featuredRestaurants,
        locations: state.locations,
        detailsLoading: action.payload,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
    case STORE_FEATURED_RESTAURANTS:
      return {
        ...state,
        loading: state.loading,
        kitchenTypes: state.kitchenTypes,
        dishes: state.dishes,
        restaurants: state.restaurants,
        restaurantItem: state.restaurantItem,
        dishItem: state.dishItem,
        featuredRestaurants: action.payload,
        events: state.events,
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
    case STORE_RESTAURANTS_LOCATIONS:
      return {
        ...state,
        loading: state.loading,
        kitchenTypes: state.kitchenTypes,
        dishes: state.dishes,
        restaurants: state.restaurants,
        restaurantItem: state.restaurantItem,
        events: state.events,
        dishItem: state.dishItem,
        featuredRestaurants: state.featuredRestaurants,
        locations: action.payload,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
      case STORE_KITCHEN_TYPES: 
      return {
        ...state,
        loading: state.loading,
        dishes: state.dishes,
        kitchenTypes: action.payload,
        restaurants: state.restaurants,
        restaurantItem: state.restaurantItem,
        dishItem: state.dishItem,
        featuredRestaurants: state.featuredRestaurants,
        events: state.events,
        locations: state.locations,
        detailsLoading: state.detailsLoading,
        allOffers: state.allOffers,
        latestOffers: state.latestOffers
      };
    case STORE_ALL_OFFERS: 
    return {
      ...state,
      kitchenTypes: state.kitchenTypes,
      loading: state.loading,
      dishes: state.dishes,
      restaurants: state.restaurants,
      events: state.events,
      restaurantItem: state.restaurantItem,
      dishItem: state.dishItem,
      featuredRestaurants: state.featuredRestaurants,
      locations: state.locations,
      detailsLoading: state.detailsLoading,
      allOffers: action.payload,
      latestOffers: state.latestOffers
    };
    case STORE_LATEST_OFFERS: 
    return {
      ...state,
      loading: state.loading,
      dishes: state.dishes,
      kitchenTypes: state.kitchenTypes,
      restaurants: state.restaurants,
      restaurantItem: state.restaurantItem,
      dishItem: state.dishItem,
      events: state.events,
      featuredRestaurants: state.featuredRestaurants,
      locations: state.locations,
      detailsLoading: state.detailsLoading,
      allOffers: state.allOffers,
      latestOffers: action.payload
    };
    default:
      return state;
  }
};

