import Realm from 'realm';
import UserModel from './UserModel';
import RestaurantModel from './RestaurantModel';
import CasheModel from './CasheModel';
import OfferModel from './OfferModel';

const realm = new Realm({ schema: [UserModel, RestaurantModel, CasheModel, OfferModel] });
export default realm;
