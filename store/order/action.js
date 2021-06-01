export const actionTypes = {
    GET_ORDER: 'GET_ORDER',
    GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS',
    GET_ORDER_ERROR: 'GET_ORDER_ERROR',

    ORDER_INFO: 'ORDER_INFO',

    CREATE_ORDER: 'CREATE_ORDER',
    CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS',
    CREATE_ORDER_FORM_SUCCESS: 'CREATE_ORDER_FORM_SUCCESS',
    CREATE_ORDER_ERROR: 'CREATE_ORDER_ERROR',
};

export function getOrder() {
    return { type: actionTypes.GET_ORDER };
}

export function getOrderSuccess(payload) {
    return {
        type: actionTypes.GET_ORDER_SUCCESS,
        payload: payload,
    };
}

export function getOrderError(error) {
    return {
        type: actionTypes.GET_ORDER_ERROR,
        error,
    };
}

export function orderInfo(payload) {
    return { 
        type: actionTypes.ORDER_INFO,
        payload:payload
    };
}

export function createOrder(payload) {
    return { 
        type: actionTypes.CREATE_ORDER,
        payload:payload
    };
}


export function createOrderFormSuccess(payload) {
    return {
        type: actionTypes.CREATE_ORDER_FORM_SUCCESS,
        payload: payload,
    };
}

export function createOrderSuccess(payload) {
    return {
        type: actionTypes.CREATE_ORDER_SUCCESS,
        payload: payload,
    };
}

export function createOrderError(payload) {
    return {
        type: actionTypes.CREATE_ORDER_ERROR,
        payload,
    };
}
