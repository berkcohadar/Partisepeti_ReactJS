import { all, put, takeEvery, call  } from 'redux-saga/effects';
import {notification } from 'antd';
import { polyfill } from 'es6-promise';
import { actionTypes, loginSuccess, logOutSuccess, loginFail } from './action';
import UserRepository from '../../repositories/UserRepository';

polyfill();
const modalSuccess = type => {
    notification[type]({
        message: 'Welcome back',
        description: 'You are login successful!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};
const modalDanger = type => {
    notification[type]({
        message: 'Oops!',
        description: 'Invalid Email or Password!',
    });
};

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

function* loginRequest({payload}) {
    try {
        const data = yield call(UserRepository.loginRequest, payload);
        if(!data.error) {
            yield put(loginSuccess(data,payload.username));
            modalSuccess('success');
        } else {
            modalDanger('warning');
            yield put(loginFail(data.error));
        }
        
    } catch (err) {
        yield put(loginFail(err));
    }
}

function* registerRequest({payload}) {
    try {
        const data = yield call(UserRepository.registerRequest, payload);
        if(!data.error) {
            yield put(loginSuccess(data,payload.username));
            modalSuccess('success');
        } else {
            modalDanger('warning');
            yield put(loginFail(data.error));
        }
        
    } catch (err) {
        yield put(loginFail(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginRequest)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerRequest)]);
}
