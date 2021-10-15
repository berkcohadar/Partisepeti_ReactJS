import { actionTypes } from './action';

export const initState = {
    token: '',
    isLoggedIn: false,
    email: '',
    name: '',
    surname: '',
    gender: '',
    birth_date: '',
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{
                    token: action.payload.key,
                    isLoggedIn: true,
                    email: action.payload.user.email,
                    name: action.payload.user.first_name,
                    surname: action.payload.user.last_name,
                    gender: action.payload.user.gender,
                    birth_date: action.payload.user.birth_date,
                },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ token: '', isLoggedIn: false, email: '', name: '', surname: '', gender: '', birth_date: '', },
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                ...{ token: '', isLoggedIn: false, email: '', name: '', surname: '', gender: '', birth_date: '', },
            };
        default:
            return state;
    }
}

export default reducer;
