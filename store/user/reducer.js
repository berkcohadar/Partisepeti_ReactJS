import { actionTypes } from './action';

export const initState = {
    profile: {},
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
        default:
            return state;
    }
}

export default reducer;
