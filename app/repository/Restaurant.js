import realm from './../models/index';
/**
 * Creates the restaurant class.
 * 
 * @class Restaurant
 */
class Restaurant {
  /**
   * Used to insert a new restaurant.
   * 
   * @param item The restaurant item to added to the database
   */
  insertRestaurant(item) {
    try {
      realm.write(() => {
        realm.create('Restaurant', {
          id: item.id,
          restaurantId: item.id,
          restaurantName: item.restaurantName,
          restaurantArabicName: item.restaurantArabicName,
          kitchenType: item.kitchenType,
          image: item.image,
          description: item.description,
          address: item.address,
          latitude: item.latitude,
          longitude: item.longitude,
          mobile: item.mobile,
          websiteUrl: item.websiteUrl,
          facebook: item.facebook,
          rating: item.rating,
          deliveryCost: item.deliveryCost,
          favorite: 1
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Used to get all restaurants.
   * 
   * @returns {RealmObject[]}
   */
  getAll() {
    return realm.objects('Restaurant');
  }
  /**
   * Used to get all restaurants ids.
   * 
   * @returns {RealmObject[]}
   */
  getRestaurantsId() {
    return realm.objects('Restaurant').map(item => item.id);
  }
  /**
   * Used to delete a  restaurant from the database.
   * 
   * @param {int} id The restaurant id.
   */
  deleteRestaurant(id) {
    realm.write(() => {
      const restaurants = realm.objects('Restaurant');
      const restaurant = restaurants.filtered('id = $0', id);
      realm.delete(restaurant);
    });
  }
    /**
   * Used to delete all restaurant from the database.
   * 
   * @param {int} id The restaurant id.
   */
  deleteRestaurants() {
    realm.write(() => {
      const restaurants = realm.objects('Restaurant');
      realm.delete(restaurants);
    });
  }
  /**
   * Used to get a restaurant from the database.
   * 
   * @param {int} id The restaurant id.
   */
  getRestaurant(id) {
    const query = 'id = $0';
    const restaurants = realm.objects('Restaurant');
    const restaurant = restaurants.filtered(query, id);
    return restaurant[0];
  }
}
export default new Restaurant();
