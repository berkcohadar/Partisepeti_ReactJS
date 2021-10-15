import { actionTypes } from './action';

export const initialState = {
    collections: [],
    collection: {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_COLLECTIONS_SUCCESS:
            return {
                ...state,
                ...{ collections: action.payload },
            };
        case actionTypes.GET_COLLECTION_SUCCESS:
            return {
                ...state,
                ...{ collection: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;
