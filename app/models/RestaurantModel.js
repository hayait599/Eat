import Realm from 'realm';
/**
 * Creates the restaurant model schema.
 * 
 * @class RestaurantModel
 * @extends Realm.Object
 */
class RestaurantModel extends Realm.Object {}
RestaurantModel.schema = {
  name: 'Restaurant',
  primaryKey: 'id',
  properties: {
    id: { type: 'int' },
    restaurantId: { type: 'int' },
    restaurantName: { type: 'string?' },
    restaurantArabicName: { type: 'string?' },
    kitchenType: { type: 'string?', default: null },
    websiteUrl: { type: 'string?', default: null },
    facebook: { type: 'string?', default: null },
    image: { type: 'string?', default: null },
    mobile: { type: 'string?', default: null },
    latitude: { type: 'string?', default: null },
    longitude: { type: 'string?', default: null },
    address: { type: 'string?', default: null },
    description: { type: 'string?', default: null },
    deliveryCost: { type: 'float?', default: 0 },
    rating: { type: 'float?', default: 0 },
    favorite: { type: 'int?', default: false },
  },
};
export default RestaurantModel;
