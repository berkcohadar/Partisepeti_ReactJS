import { actionTypes } from './action';

export const initState = {
    token: "",
    isLoggedIn:false,
    email:"",
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ token: action.payload.key, isLoggedIn: true, email:action.email},
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ token: "" , isLoggedIn: false, email:"" },
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                ...{ token: "" , isLoggedIn: false, email:""},
            };
        default:
            return state;
    }
}

export default reducer;
