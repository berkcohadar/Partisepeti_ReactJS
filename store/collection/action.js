export const actionTypes = {
    GET_COLLECTIONS: 'GET_COLLECTIONS',
    GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',

    GET_COLLECTION: 'GET_COLLECTION',
    GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',

    GET_CATEGORIES: 'GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
};

export function getCollections() {
    return { type: actionTypes.GET_COLLECTIONS};
}

export function getCollectionsSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONS_SUCCESS,
        payload,
    };
}

export function getCollection(payload) {
    return { type: actionTypes.GET_COLLECTIONS, payload };
}

export function getCollectionSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONS_SUCCESS,
        payload,
    };
}
