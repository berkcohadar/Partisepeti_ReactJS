import { all, put, takeEvery , call} from 'redux-saga/effects';
import { notification } from 'antd';
import { polyfill } from 'es6-promise';
import x from '../../repositories/CartRepository';

import {
    actionTypes,
    getCartError,
    getCartSuccess,
    updateCartSuccess,
    updateCartError,
} from './action';

polyfill();

const modalSuccess = (type) => {
    notification[type]({
        placement: 'bottomRight',
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        placement: 'bottomRight',
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

export const calculateAmount = (obj) => {
    let total=0;
    obj.map((item) => {total += item.quantity * (item.products[0].cart_price)});
    return total;
}

function* getCartSaga() {
    try {
        if(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) {
            // const data = yield call(CartRepository.getCart);
            // if(data.error){
            //     yield put(getCartError(data.error));
            // } else{
            //     yield put(updateCartSuccess(data));
            // }
            yield put(getCartSuccess());
        }
        else{
            yield put(getCartSuccess());
        }
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addItemSaga(payload) {
    if (!payload.product.quantity) {
        payload.product.quantity = 1
    }
    console.log(payload.product.quantity);
    try {
        const { product } = payload;
        const localCart = JSON.parse(localStorage.getItem('persist:partisepeti')).cart;
        let currentCart = JSON.parse(localCart);
        let existItem = currentCart.cartItems.find(
            (item) => item.id === product.id
        );
        if (existItem) {
            existItem.quantity += product.quantity;
            if(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) {
                const data =  yield call(CartRepository.addToCart, existItem);
                console.log(data);
                if(data.error){
                    existItem.quantity -= product.quantity;
                    yield put(getCartError(data.error));
                } else{
                    existItem.cartItemId = data;
                }
            }
        } else {
            if(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) {
                const data = yield call(CartRepository.addToCart, product);
                console.log(data);
                if(data.error){
                    yield put(getCartError(data.error));
                }
                else{
                    product.cartItemId = data;
                }
            }
            currentCart.cartTotal++;
            currentCart.cartItems.push(product);
        }

        currentCart.amount = calculateAmount(currentCart.cartItems);
        yield put(updateCartSuccess(currentCart));
        modalSuccess('success');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* removeItemSaga(payload) {
    try {
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:partisepeti')).cart
        );
        let index = localCart.cartItems.findIndex(
            (item) => item.id === product.id
        );
        localCart.cartTotal = localCart.cartTotal - 1; //product.quantity
        localCart.cartItems.splice(index, 1);
        localCart.amount = calculateAmount(localCart.cartItems);
        if (localCart.cartItems.length === 0) {
            localCart.cartItems = [];
            localCart.amount = 0;
            localCart.cartTotal = 0;
        }
        if(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) {
            yield call(CartRepository.removeFromCart, product.cartItemId);
        }
        yield put(updateCartSuccess(localCart));
        modalWarning('warning');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseQtySaga(payload) {
    try {selectedItem
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:partisepeti')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );
        if (selectedItem) {
            selectedItem.quantity++;
            localCart.amount = calculateAmount(localCart.cartItems);
            if(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) {
                const data =  yield call(CartRepository.addToCart, existItem);
            } else {
                const data = yield call(CartRepository.addToCartGuest, existItem);
            }
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreaseItemQtySaga(payload) {
    try {
        const { product } = payload;
        const localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:partisepeti')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );

        if (selectedItem) {
            selectedItem.quantity--;
            localCart.amount = calculateAmount(localCart.cartItems);
            if(JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn) {
                const data =  yield call(CartRepository.addToCart, existItem);
            } else {
                const data = yield call(CartRepository.addToCartGuest, existItem);
            }
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* clearCartSaga() {
    try {
        const emptyCart = {
            cartItems: [],
            amount: 0,
            cartTotal: 0,
        };
        yield put(updateCartSuccess(emptyCart));
    } catch (err) {
        yield put(updateCartError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_QTY, increaseQtySaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
}
