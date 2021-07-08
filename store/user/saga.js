import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import {
    actionTypes,
    getProfileSuccess,
    updateProfileSuccess,
    deleteProfileSuccess,
    profileError,
    getAddressesSuccess,
    addAddressesSuccess,
    updateAddressesSuccess,
    deleteAddressesSuccess,
    addressError,
} from './action';
import UserRepository from '../../repositories/UserRepository';

polyfill();

const modalSuccess = type => {
    notification[type]({
        message: 'Welcome back',
        description: 'You are login successful!',
        className:"antd-notification",
        style: {
            color:'rgb(28,26,24)',
            borderRadius:'8px',
            boxShadow:'0px 0px 6px 0px rgba(28,26,24, 0.8)',
            backgroundColor: 'rgba(255, 255, 255, .15)',
            backdropFilter:'blur(8px)',

          },
        icon: <i className='icon-check' style={{paddingTop:'5px',fontWeight:'1200', fontSize:'34px', backgroundColor:'#a8e063', backgroundImage: 'linear-gradient(180deg, #56ab2f, #a8e063)', backgroundSize:'100%',backgroundClip:'text',WebkitTextFillColor:'transparent',backgroundRepeat:'repeat',WebkitBackgroundClip:'text' }} />,
    
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
        className:"antd-notification",
        style: {
            color:'rgb(28,26,24)',
            borderRadius:'8px',
            boxShadow:'0px 0px 6px 0px rgba(28,26,24, 0.8)',
            backgroundColor: 'rgba(255, 255, 255, .15)',
            backdropFilter:'blur(8px)',

          },
        icon: <i className='icon-check' style={{paddingTop:'5px',fontWeight:'1200', fontSize:'34px', backgroundColor:'#a8e063', backgroundImage: 'linear-gradient(180deg, #56ab2f, #a8e063)', backgroundSize:'100%',backgroundClip:'text',WebkitTextFillColor:'transparent',backgroundRepeat:'repeat',WebkitBackgroundClip:'text' }} />,
    
    });
};

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
        if(!data.error) {
            yield put(getProfileSuccess(data));
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(profileError(data.error));
        }
    } catch (err) {
        yield put(profileError(err));
    }
}

function* profileUpdateRequest({payload}) {
    try {
        const data = yield call(UserRepository.profileUpdateRequest, payload);
        if(!data.error) {
            yield put(updateProfileSuccess());
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(profileError(data.error));
        }
        
    } catch (err) {
        yield put(profileError(err));
    }
}

function* getAdressesRequest() {
    try {
        const data = yield call(UserRepository.getAdressesRequest);
        if(!data.error) {
            yield put(getAddressesSuccess(data));
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(addressError(data.error));
        }
    } catch (err) {
        yield put(addressError(err));
    }
}

function* addAdressesRequest({payload}) {
    try {
        const data = yield call(UserRepository.addAdressesRequest, payload);        
        if(!data.error) {
            yield put(addAddressesSuccess());
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(addressError(data.error));
        }
    } catch (err) {
        yield put(addressError(err));
    }
}

function* updateAdressesRequest({payload}) {
    try {
        const data = yield call(UserRepository.updateAdressesRequest, payload);
        if(!data.error) {
            yield put(updateAddressesSuccess());
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(addressError(data.error));
        }
    } catch (err) {
        yield put(addressError(err));
    }
}

function* deleteAdressesRequest() {
    try {
        const data = yield call(UserRepository.deleteAdressesRequest);
        if(!data.error) {
            yield put(deleteAddressesSuccess());
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(addressError(data.error));
        }
    } catch (err) {
        yield put(addressError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_PROFILE, profileRequest)]);
    yield all([takeEvery(actionTypes.DELETE_PROFILE, deleteProfile)]);
    yield all([takeEvery(actionTypes.UPDATE_PROFILE, profileUpdateRequest)]);
    yield all([takeEvery(actionTypes.GET_ADDRESSES, getAdressesRequest)]);
    yield all([takeEvery(actionTypes.ADD_ADDRESS, addAdressesRequest)]);
    yield all([takeEvery(actionTypes.UPDATE_ADDRESS, updateAdressesRequest)]);
    yield all([takeEvery(actionTypes.DELETE_ADDRESS, deleteAdressesRequest)]);
}
