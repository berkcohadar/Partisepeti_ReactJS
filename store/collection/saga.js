import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import {
    actionTypes,
    getCollectionsSuccess,
} from './action';
import CollectionRepository from '../../repositories/CollectionRepository';
polyfill();

function* getCollections() {
    try {
        const data = yield call(CollectionRepository.getCollections);
        yield put(getCollectionsSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_COLLECTIONS, getCollections)]);
}
