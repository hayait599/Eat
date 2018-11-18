import Realm from 'realm';
/**
 * Creates the user model schema.
 * 
 * @class UserModel
 * @extends Realm.Object
 */
class UserModel extends Realm.Object {}
UserModel.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: { type: 'string' },
    accessToken: { type: 'string' },
    mobile: { type: 'string?', default: null },
    userName: { type: 'string?', default: null },
    notifications: { type: 'bool?', default: false },
  },
};
export default UserModel;
