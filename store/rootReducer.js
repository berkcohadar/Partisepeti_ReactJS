import { combineReducers } from 'redux';
import product from './product/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
import collection from './collection/reducer';
import app from './app/reducer';
import user from './user/reducer';
import order from './order/reducer';


export default combineReducers({
    auth,
    product,
    setting,
    cart,
    compare,
    wishlist,
    collection,
    app,
    user,
    order
});
