import { all, put, takeEvery, call  } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { actionTypes, getProfileSuccess, deleteProfileSuccess,profileError } from './action';
import UserRepository from '../../repositories/UserRepository';
polyfill();

function* deleteProfile() {
    try {
        yield put(deleteProfileSuccess());
    } catch (err) {
        yield put(profileError(err));
    }
}

function* profileRequest() {
    try {
        const data = yield call(UserRepository.profileRequest);
        yield put(getProfileSuccess(data));
    } catch (err) {
        yield put(profileError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_PROFILE, profileRequest)]);
    yield all([takeEvery(actionTypes.DELETE_PROFILE, deleteProfile)]);
}
