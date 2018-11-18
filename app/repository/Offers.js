import realm from './../models/index';
/**
 * Creates the restaurant class.
 * 
 * @class Restaurant
 */
class Offers {
  /**
   * Used to insert a new offer.
   * 
   * @param item The offer item to added to the database
   * 
   * @returns Void
   */
  insertOffer(item) {
    try {
      realm.write(() => {
        realm.create('Offer', {
          id: item.id,
          restaurantName: item.restaurantName,
          restaurantArabicName: item.restaurantArabicName,
          logo: item.logo,
          image: item.image,
          description: item.description,
          latitude: item.latitude,
          longitude: item.longitude,
          mobile: item.mobile,
          websiteUrl: item.websiteUrl,
          facebook: item.facebook,
          favorite: 1
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * Used to get all offers.
   * 
   * @returns {RealmObject[]}
   */
  getAll() {
    return realm.objects('Offer');
  }
  /**
   * Used to get all offers ids.
   * 
   * @returns {RealmObject[]}
   */
  getOfferssId() {
    return realm.objects('Offer').map(item => item.id);
  }
  /**
   * Used to delete an offer from the offer table.
   * 
   * @param {int} id The offer id.
   * 
   * @returns Void
   */
  deleteOffer(id) {
    realm.write(() => {
      const offers = realm.objects('Offer');
      const offer = offers.filtered('id = $0', id);
      realm.delete(offer);
    });
  }
  /**
   * Used to delete all offers from the offer table..
   * 
   * @param {int} id The restaurant id.
   * 
   * @returns Void
   */
  deleteOffers() {
    realm.write(() => {
      const offers = realm.objects('Offer');
      realm.delete(offers);
    });
  }
}
export default new Offers();
