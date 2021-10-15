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

    async getProductsByCollectionSlug(slug) {
        const reponse = await Repository.get(
            `${baseUrl}/items/?categories=${slug}`
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

}

export default new CollectionRepository();
