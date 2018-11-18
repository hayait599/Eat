import realm from './../models/index';
/**
 * Creates the User class.
 * 
 * @class User
 */
class User {
  /**
   * Used to insert an object to the users model.
   * 
   * @param {string} id 
   * @param {string} accessToken 
   * @param {string} mobile 
   * @param {string} userName 
   * 
   * @returns Void
   */
  insertUser(id, accessToken, mobile, userName) {
    realm.write(() => {
      realm.create('User', {
        id,
        accessToken,
        mobile,
        userName
      });
    });
  }
  /**
   * Used to delete all object from the users model.
   * 
   * @returns Void
   */
  deleteAll() {
    realm.write(() => {
      const user = realm.objects('User');
      realm.delete(user);
    });
  }
  /**
   * Used to get the access token field from the users model.
   * 
   * @returns {string} accessToken
   */
  getAccessToken() {
    const getUser = realm.objects('User');
    if (getUser.length > 0) {
      const accessToken = getUser[0].accessToken;
      return accessToken;
    }
    return '';
  }
  getUserId() {
    // only one user needs to be fetched from the users table, getUser is an array of objects
    const getUser = realm.objects('User');
    if (getUser.length > 0) {
      return getUser[0].id;
    }
    return '';
  }
  /**
   * Used to get the user's information.
   * 
   * @returns {object} user
   */
  getUserInfo() {
    // only one user needs to be fetched from the users table, getUser is an array of objects
    const getUser = realm.objects('User');
    if (getUser.length > 0) {
      return getUser[0].userName;
    }
    return '';
  }
  /**
   * Used to get the user's notifications field.
   * 
   * @returns {boolean} user notifications field
   */
  getNotifications() {
    const getUser = realm.objects('User');
    if (getUser.length > 0) {
      return getUser[0].notifications;
    }
    return false;
  }
  /**
   * Used to update the user's notifications field.
   * 
   * @param {boolean} flag
   * 
   * @returns Void
   */
  updateNotifications(flag) {
    const getUser = realm.objects('User');
    realm.write(() => {
      realm.create('User', { id: getUser[0].id, notifications: flag }, true);
    });
  }
}
export default new User();
