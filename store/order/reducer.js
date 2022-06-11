import { actionTypes } from './action';

export const initialState = {
    orders:[],
    orderInfo:null,
    paymentScript: "",
    paymentUrl: "",
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                ...{ orders: action.payload },
            };
        case actionTypes.ORDER_INFO:
            return {
                ...state,
                ...{ orderInfo: action.payload },
            };
        case actionTypes.CREATE_ORDER_FORM_SUCCESS:
            return {
                ...state,
                ...{ paymentScript: action.payload.checkoutFormContent },
                ...{ paymentUrl: action.payload.paymentPageUrl },
            };
        case actionTypes.CLEAR_ORDERS:
            return{
                ...state,
                ...{ orders: [] },
                ...{ orderInfo: null },
                ...{ paymentScript: "" },
                ...{ paymentUrl: "" },
            };
        default:
            return state;
    }
}

export default reducer;
