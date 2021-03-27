import Repository, { baseUrl } from './Repository';
import axios from 'axios';

class CollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getCollections() {
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/categories/',
            headers: {"Content-Type": "application/json"}
            })
            .then((response) => {
                return response.data.results;
            })
            .catch((error) =>  {return { error: JSON.stringify(error) }});
        return reponse;
    }

    async getCategoriesBySlug(payload) {
        let query = '';
        payload.forEach((item) => {
            if (query === '') {
                query = `slug=${item}`;
            } else {
                query = query + `&slug=${item}`;
            }
        });
        const reponse = await Repository.get(
            `${baseUrl}/categories/?${query}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByCollectionSlug(slug) {
        const reponse = await Repository.get(
            `${baseUrl}/items/?category=${slug}`
        )
            .then((response) => {
                if (response.data.results && response.data.results.length > 0) {
                    return { items: response.data.results };
                } else {
                    return null;
                }
                return response.data;
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getProductsByCategorySlug(slug) {
        const reponse = await Repository.get(
            `${baseUrl}/categories/?slug=${slug}`
        )
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return { items: response.data[0].products };
                } else {
                    return null;
                }
                return response.data;
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }
}

export default new CollectionRepository();
