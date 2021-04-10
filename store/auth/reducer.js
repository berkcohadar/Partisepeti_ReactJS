import { actionTypes } from './action';

export const initState = {
    token: '',
    isLoggedIn: false,
    email: '',
    name: '',
    surname: '',
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{
                    token: action.payload.token,
                    isLoggedIn: true,
                    email: action.payload.user.email,
                    name: action.payload.user.first_name,
                    surname: action.payload.user.last_name,
                },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ token: '', isLoggedIn: false, email: '' },
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                ...{ token: '', isLoggedIn: false, email: '' },
            };
        default:
            return state;
    }
}

export default reducer;
