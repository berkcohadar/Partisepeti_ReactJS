import { actionTypes } from './action';

export const initState = {
    profile: {},
    address: {},
    errors: {},
};


function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                ...{ profile: action.payload},
            };
        case actionTypes.DELETE_PROFILE_SUCCESS:
            return {
                ...state,
                ...{ profile: {} },
            };
        case actionTypes.PROFILE_ERROR:
            return {
                ...state,
                ...{ errors: action.payload },
            };
        case actionTypes.GET_ADDRESSES:
            return {
                ...state,
                ...{ address: action.payload },
            };
        case actionTypes.ADDRESS_ERROR:
            return {
                ...state,
                ...{ errors: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;
