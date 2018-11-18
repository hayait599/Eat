import Realm from 'realm';
/**
 * Creates the restaurant model schema.
 * 
 * @class OfferModel
 * @extends Realm.Object
 */
class OfferModel extends Realm.Object {}
OfferModel.schema = {
  name: 'Offer',
  primaryKey: 'id',
  properties: {
    id: { type: 'int' },
    restaurantName: { type: 'string?' },
    restaurantArabicName: { type: 'string?' },
    websiteUrl: { type: 'string?', default: null },
    facebook: { type: 'string?', default: null },
    logo: { type: 'string?', default: null },
    image: { type: 'string?', default: null },
    mobile: { type: 'string?', default: null },
    latitude: { type: 'string?', default: null },
    longitude: { type: 'string?', default: null },
    description: { type: 'string?', default: null },
    favorite: { type: 'int?', default: false },
  },
};
export default OfferModel;
