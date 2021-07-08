export const actionTypes = {
    // PROFILE ACTIONS
    GET_PROFILE: 'GET_PROFILE',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    DELETE_PROFILE: 'DELETE_PROFILE',
    DELETE_PROFILE_SUCCESS: 'DELETE_PROFILE_SUCCESS',
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
    PROFILE_ERROR: 'PROFILE_ERROR',
    
    // ADDRESS ACTIONS
    GET_ADDRESSES:'GET_ADDRESSES',
    GET_ADDRESSES_SUCCESS:'GET_ADDRESSES_SUCCESS',
    ADD_ADDRESS:'ADD_ADDRESS',
    ADD_ADDRESS_SUCCESS:'ADD_ADDRESS_SUCCESS',
    UPDATE_ADDRESS:'UPDATE_ADDRESS',
    UPDATE_ADDRESS_SUCCESS:'UPDATE_ADDRESS_SUCCESS',
    DELETE_ADDRESS:'DELETE_ADDRESS',
    DELETE_ADDRESS_SUCCESS:'DELETE_ADDRESS_SUCCESS',
    ADDRESS_ERROR:'ADDRESS_ERROR',

};
    // PROFILE ACTIONS

export function getProfile() {
    return { type: actionTypes.GET_PROFILE};
}

export function getProfileSuccess(result) {
    return { type: actionTypes.GET_PROFILE_SUCCESS,payload:result};
}

export function updateProfile(data) {
    return { type: actionTypes.UPDATE_PROFILE, payload:data};
}

export function updateProfileSuccess() {
    return { type: actionTypes.UPDATE_PROFILE_SUCCESS};
}

export function deleteProfile() {
    return { type: actionTypes.DELETE_PROFILE};
}

export function deleteProfileSuccess() {
    return { type: actionTypes.DELETE_PROFILE_SUCCESS };
}

export function profileError(err) {
    return { type: actionTypes.PROFILE_ERROR,error:err };
}

    // ADDRESS ACTIONS
export function getAddresses() {
    return { type: actionTypes.GET_ADDRESSES};
}

export function getAddressesSuccess(result) {
    return { type: actionTypes.GET_ADDRESSES_SUCCESS, payload:result};
}

export function addAddress(data) {
    return { type: actionTypes.ADD_ADDRESS, payload:data};
}

export function addAddressesSuccess() {
    return { type: actionTypes.ADD_ADDRESS_SUCCESS};
}

export function updateAddress(data) {
    return { type: actionTypes.UPDATE_ADDRESS, payload:data};
}

export function updateAddressesSuccess() {
    return { type: actionTypes.UPDATE_ADDRESS_SUCCESS};
}

export function deleteAddress(data) {
    return { type: actionTypes.DELETE_ADDRESS, payload:data};
}

export function deleteAddressesSuccess() {
    return { type: actionTypes.DELETE_ADDRESS_SUCCESS};
}

export function addressError(err) {
    return { type: actionTypes.ADDRESS_ERROR, payload:err};
}
