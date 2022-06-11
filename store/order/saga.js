import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { actionTypes, getOrdersSuccess, getOrdersError, createOrderSuccess, createOrderError, createOrderFormSuccess  } from './action';
import OrderRepository from '../../repositories/OrderRepository';
import Router from 'next/router';

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

function* createOrderRequest({payload}) {
    try {
        if (JSON.parse( JSON.parse(localStorage.getItem('persist:partisepeti')).auth).isLoggedIn){
            payload.email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email
        }
        payload["cartItems"] = [];
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:partisepeti')).cart
        );
        localCart.cartItems.map((item) => {
            payload.cartItems.push({
                price:item.product.price,
                product:item.product.id,
                quantity:item.quantity,
            })
        });
        const data = yield call(OrderRepository.createOrderRequest, payload);
        Router.push(data.paymentPageUrl);
        /*  */
        
        /*
        checkoutFormContent: "script"
        conversationId : "order-no"
        locale: "tr"
        paymentPageUrl: "url"
        status: "form olustu mu"
        systemTime: "time"
        token: "849d0a2b-aba0-41be-91bb-daf1c02b6ef0"
        tokenExpireTime: "time"      
        */

        if(!data.error) {
            yield put(createOrderFormSuccess(data));
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(createOrderError(data.error));
        }
        
    } catch (err) {
        console.log(err)
        yield put(createOrderError(err));
    }
}

function* getOrdersRequest() {
    try {
        const data = yield call(OrderRepository.getOrdersRequest);
        if(!data.error) {
            yield put(getOrdersSuccess(data));
            modalSuccess('success');
        } else {
            modalWarning('warning');
            yield put(getOrdersError(data.error));
        }
        
    } catch (err) {
        console.log(err)
        yield put(getOrdersError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.CREATE_ORDER, createOrderRequest)]);
    yield all([takeEvery(actionTypes.GET_ORDERS, getOrdersRequest)]);
}
