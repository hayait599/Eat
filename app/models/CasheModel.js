import Realm from 'realm';
/**
 * Creates the cashe model schema.
 * 
 * @class CasheModel
 * @extends Realm.Object
 */
class CasheModel extends Realm.Object {}
CasheModel.schema = {
  name: 'Cashe',
  primaryKey: 'key',
  properties: {
    key: { type: 'string' },
    timeToLive: { type: 'date' },
    data: { type: 'string?', default: null }
  },
};
export default CasheModel;
