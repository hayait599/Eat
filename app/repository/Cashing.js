import realm from './../models/index';
import Encoding from './../config/Encoding';
/**
 * Creates the Cashe class.
 * 
 * @class Cashe
 */
class Cashing {
  /**
   * Used to insert an object to the Cashe model.
   * 
   * @param {string} id 
   * @param {string} accessToken 
   * @param {string} mobile 
   * @param {string} userName 
   * 
   * @returns Void
   */
  casheData(key, data) {
    const encodedKey = Encoding.encodeKey(key);
    const date = new Date(Date.now());
    const encodedData = Encoding.encodeData(data);
    const query = 'key = $0';
    const cashedObjects = realm.objects('Cashe');
    const cashedObject = cashedObjects.filtered(query, encodedKey);
    if (Object.keys(cashedObject).length === 0) {
      realm.write(() => {
        realm.create('Cashe', {
          key: encodedKey,
          timeToLive: date,
          data: encodedData
        });
      });
    }
  }
  /**
   * Used to get cashed data
   * 
   * @param {string} key 
   */
  getCashedData(key) {
    const encodedKey = Encoding.encodeKey(key);
    const query = 'key = $0';
    const cashedObjects = realm.objects('Cashe');
    const cashedObject = cashedObjects.filtered(query, encodedKey);
    if (Object.keys(cashedObject).length === 0) {
      return null;
    }
    return cashedObject[0].data;
  }
  /**
   * Used to delete all object from the Cashe model.
   * 
   * @returns Void
   */
  deleteAll() {
    realm.write(() => {
      const cashe = realm.objects('Cashe');
      realm.delete(cashe);
    });
  }
 
}
export default new Cashing();
