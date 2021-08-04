import Repository, { baseUrl, serializeQuery } from './Repository';

class StoreRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getStores(payload) {
        const endPoint = `stores?${serializeQuery(payload)}`;
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getStoreBySlug(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/stores?slug=${payload}`
        )
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getStoreItemsByKeyword(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/posts?title_contains=${payload}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getPostItemsByCategory(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/posts?title_contains=${payload}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new StoreRepository();
