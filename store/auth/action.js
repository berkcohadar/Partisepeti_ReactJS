import { clearCart } from "../cart/action";
import { deleteProfile } from "../user/action";
import { clearOrders } from "../order/action";
import { updateCartSuccess } from "../order/action";
import { put,} from 'redux-saga/effects';


export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',

    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

    REGISTER_REQUEST:'REGISTER_REQUEST',
};

export function login(payload) {
    return { type: actionTypes.LOGIN_REQUEST,payload:payload };
}

export function register(payload) {
    return { type: actionTypes.REGISTER_REQUEST,payload:payload };
}

export function loginSuccess(result) {
    return { type: actionTypes.LOGIN_SUCCESS,payload:result};
}

export function loginFail(err) {
    return { type: actionTypes.LOGIN_FAIL,payload:err};
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}
