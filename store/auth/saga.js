import { all, put, takeEvery, call  } from 'redux-saga/effects';
import { notification } from 'antd';
import { polyfill } from 'es6-promise';
import { actionTypes, loginSuccess, logOutSuccess, loginFail } from './action';
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
const modalDanger = type => {
    notification[type]({
        message: 'Oops!',
        description: 'Invalid Email or Password!',
        className:"antd-notification",
        style: {
            color:'black',
            fontWeight:'1100',
            borderRadius:'8px',
            boxShadow:'0px 0px 6px 0px rgba(28,26,24, 0.8)',
            backgroundColor: 'rgba(255, 255, 255, .15)',
            backdropFilter:'blur(8px)',

          },
        icon: <i className='icon-check' style={{paddingTop:'5px',fontWeight:'1200', fontSize:'34px', backgroundColor:'#a8e063', backgroundImage: 'linear-gradient(180deg, #56ab2f, #a8e063)', backgroundSize:'100%',backgroundClip:'text',WebkitTextFillColor:'transparent',backgroundRepeat:'repeat',WebkitBackgroundClip:'text' }} />,
    
    });
};

function* logOutSaga() {
    try {
        // DELETE_CART
        // DELETE_USER_INFO
        // yield call(emptyCart());
        // yield call(deleteUser());
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

function* loginRequest({payload}) {
    try {
        const data = yield call(UserRepository.loginRequest, payload);
        console.log("\n\n\n",data,'\n\n\n')
        if(!data.error) {
            yield put(loginSuccess({key:data.token,user:data.user}));
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
