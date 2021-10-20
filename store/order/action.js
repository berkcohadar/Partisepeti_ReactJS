export const actionTypes = {
    GET_ORDERS: 'GET_ORDERS',
    GET_ORDERS_SUCCESS: 'GET_ORDERS_SUCCESS',
    GET_ORDERS_ERROR: 'GET_ORDERS_ERROR',

    ORDER_INFO: 'ORDER_INFO',

    CREATE_ORDER: 'CREATE_ORDER',
    CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS',
    CREATE_ORDER_FORM_SUCCESS: 'CREATE_ORDER_FORM_SUCCESS',
    CREATE_ORDER_ERROR: 'CREATE_ORDER_ERROR',

    CLEAR_ORDERS : 'CLEAR_ORDERS'
};

export function getOrders() {
    return { type: actionTypes.GET_ORDERS };
}

export function getOrdersSuccess(payload) {
    return {
        type: actionTypes.GET_ORDERS_SUCCESS,
        payload: payload,
    };
}

export function getOrdersError(error) {
    return {
        type: actionTypes.GET_ORDERS_ERROR,
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

export function clearOrders(error) {
    return {
        type: actionTypes.CLEAR_ORDERS,
        error,
    };
}