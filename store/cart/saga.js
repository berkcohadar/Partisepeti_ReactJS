import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification } from 'antd';
import { polyfill } from 'es6-promise';
import CartRepository from '../../repositories/CartRepository';

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
        message: 'Eklendi!',
        // description: 'This product has been added to your cart!',
        duration: 2,
        className: 'antd-notification',
        closeIcon: null,
        style: {
            width: '200px',
            height: '56px',
            color: 'rgb(28,26,24)',
            borderRadius: '8px',
            boxShadow: '0px 0px 6px 0px rgba(28,26,24, 0.8)',
            backgroundColor: 'rgba(255, 255, 255, .15)',
            backdropFilter: 'blur(8px)',
        },
        icon: (
            <i
                className="icon-check"
                style={{
                    fontWeight: '900',
                    fontSize: '24px',
                    backgroundColor: '#a8e063',
                    backgroundImage:
                        'linear-gradient(180deg, #56ab2f, #a8e063)',
                    backgroundSize: '100%',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundRepeat: 'repeat',
                    WebkitBackgroundClip: 'text',
                }}
            />
        ),
    });
};

const modalWarning = (type) => {
    notification[type]({
        placement: 'bottomRight',
        message: 'Silindi!',
        // description: 'This product has been removed from your cart!',
        duration: 2,
        className: 'antd-notification',
        style: {
            width: '200px',
            color: 'rgb(28,26,24)',
            borderRadius: '8px',
            boxShadow: '0px 0px 6px 0px rgba(28,26,24, 0.8)',
            backgroundColor: 'rgba(255, 255, 255, .15)',
            backdropFilter: 'blur(8px)',
        },
        icon: (
            <i
                className="icon-cross"
                style={{
                    fontWeight: '900',
                    fontSize: '24px',
                    backgroundColor: '#a8e063',
                    backgroundImage:
                        'linear-gradient(180deg, #56ab2f, #a8e063)',
                    backgroundSize: '100%',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundRepeat: 'repeat',
                    WebkitBackgroundClip: 'text',
                }}
            />
        ),
    });
};

export const calculateAmount = (obj) => {
    let total = 0;
    obj.map((item) => {
        total += item.quantity * item.product.price;
    });
    return total;
};

function* getCartSaga() {
    try {
        if ( JSON.parse( JSON.parse(localStorage.getItem('persist:partisepeti')).auth ).isLoggedIn ) {
            const response = yield call(CartRepository.getCart);
            if (response.error) {
                yield put(getCartError(data.error));
            } else {
                const localCart = JSON.parse(
                    localStorage.getItem('persist:partisepeti')
                ).cart;
                let currentCart = JSON.parse(localCart);
                currentCart.cartItems = [];
                currentCart.cartTotal = 0;
                currentCart.amount = 0;
                response.results.map((key, index) => {
                    let product = {
                        product: {
                            id: key.product.id,
                            store: key.product.store,
                            market_price: key.product.market_price,
                            price: key.product.price,
                        },
                        item: {
                            id: key.product.item.id,
                            barcode: key.product.item.barcode,
                            title: key.product.item.title,
                            brand: key.product.item.brand,
                            thumbnail: key.product.item.thumbnail,
                        },
                        quantity: key.quantity,
                        cartItemId: key.id,
                    };
                    currentCart.cartItems.push(product);
                    currentCart.cartTotal++;
                });
                currentCart.amount = calculateAmount(currentCart.cartItems);
                yield put(updateCartSuccess(currentCart));
            }
        } else {
            yield put(getCartSuccess());
        }
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addItemSaga(payload) {
    if (!payload.product.quantity) {
        payload.product.quantity = 1;
    }
    try {
        const product = {
            product: {
                id: payload.product.products[0].id,
                store: payload.product.products[0].store,
                market_price: payload.product.products[0].market_price,
                price: payload.product.products[0].price,
                campaign_price: payload.product.products[0].campaign_price,
            },
            item: {
                id: payload.product.id,
                barcode: payload.product.barcode,
                title: payload.product.title,
                brand: payload.product.brand,
                thumbnail: payload.product.thumbnail,
            },
            quantity: payload.product.quantity,
            cartItemId: undefined,
        };

        const localCart = JSON.parse(
            localStorage.getItem('persist:partisepeti')
        ).cart;
        let currentCart = JSON.parse(localCart);
        let existItem = currentCart.cartItems.find(
            (item) => item.product.id === product.item.id
        );
        if (existItem) {
            existItem.quantity += product.quantity;
            if (
                JSON.parse(
                    JSON.parse(localStorage.getItem('persist:partisepeti')).auth
                ).isLoggedIn
            ) {
                const data = yield call(CartRepository.addToCart, existItem);
                if (data.error) {
                    existItem.quantity -= product.quantity;
                    yield put(getCartError(data.error));
                } else {
                    existItem.cartItemId = data;
                }
            }
        } else {
            if (
                JSON.parse(
                    JSON.parse(localStorage.getItem('persist:partisepeti')).auth
                ).isLoggedIn
            ) {
                const data = yield call(CartRepository.addToCart, product);
                if (data.error) {
                    yield put(getCartError(data.error));
                } else {
                    /* if error occured */
                    product.cartItemId = data;
                    currentCart.cartTotal++;
                    currentCart.cartItems.push(product);
                }
            } else {
                /* user not auth */
                currentCart.cartTotal++;
                currentCart.cartItems.push(product);
            }
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
            (item) => item.item.id === product.item.id
        );
        if (
            JSON.parse(
                JSON.parse(localStorage.getItem('persist:partisepeti')).auth
            ).isLoggedIn
        ) {
            const data = yield call(
                CartRepository.removeFromCart,
                product.cartItemId
            );
            if (data.error) {
                yield put(getCartError(data.error));
            } else {
                localCart.cartTotal = localCart.cartTotal - 1; //product.quantity
                localCart.cartItems.splice(index, 1);
                localCart.amount = calculateAmount(localCart.cartItems);
                if (localCart.cartItems.length === 0) {
                    localCart.cartItems = [];
                    localCart.amount = 0;
                    localCart.cartTotal = 0;
                }
            }
        } else {
            localCart.cartTotal = localCart.cartTotal - 1; //product.quantity
            localCart.cartItems.splice(index, 1);
            localCart.amount = calculateAmount(localCart.cartItems);
            if (localCart.cartItems.length === 0) {
                localCart.cartItems = [];
                localCart.amount = 0;
                localCart.cartTotal = 0;
            }
        }
        yield put(updateCartSuccess(localCart));
        modalWarning('warning');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseQtySaga(payload) {
    try {
        selectedItem;
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
            if (
                JSON.parse(
                    JSON.parse(localStorage.getItem('persist:partisepeti')).auth
                ).isLoggedIn
            ) {
                const data = yield call(CartRepository.addToCart, selectedItem);
            } else {
                const data = yield call(
                    CartRepository.addToCartGuest,
                    selectedItem
                );
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
            if (
                JSON.parse(
                    JSON.parse(localStorage.getItem('persist:partisepeti')).auth
                ).isLoggedIn
            ) {
                const data = yield call(CartRepository.addToCart, selectedItem);
            } else {
                const data = yield call(
                    CartRepository.addToCartGuest,
                    selectedItem
                );
            }
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* clearCartSaga() {
    try {
        const localCart = JSON.parse(
            localStorage.getItem('persist:partisepeti')
        ).cart;
        let emptyCart = JSON.parse(localCart);
        emptyCart.cartItems = [];
        emptyCart.cartTotal = 0;
        emptyCart.amount = 0;
        yield put(updateCartSuccess(emptyCart));
    } catch (err) {
        yield put(updateCartError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.CLEAR_CART, clearCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_QTY, increaseQtySaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
}
