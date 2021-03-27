export const actionTypes = {
    GET_PROFILE: 'GET_PROFILE',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    DELETE_PROFILE: 'DELETE_PROFILE',
    DELETE_PROFILE_SUCCESS: 'DELETE_PROFILE_SUCCESS',
    PROFILE_ERROR: 'PROFILE_ERROR'
};

export function getProfile() {
    return { type: actionTypes.GET_PROFILE};
}

export function getProfileSuccess(result) {
    return { type: actionTypes.GET_PROFILE_SUCCESS,payload:result};
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