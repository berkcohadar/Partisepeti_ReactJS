import Repository, { baseUrl, serializeQuery } from './Repository';

class ProductRepository {
    async getProducts(params) {
        if(params){
            if ('properties' in params || 'color' in params || 'size' in params){
                if (params['properties']){
                    params['properties'] = params['properties'].split(' ')
                    params['properties'].pop()
                }
                if (params['color']){
                    params['color'] = params['color'].split(' ')
                    params['color'].pop()
                }
                if (params['size']){
                    params['size'] = params['size'].split(' ')
                    params['size'].pop()
                }
                params = Object.keys(params)
                    .map(
                        (key) => key=='properties'? params[key].map((prop)=>
                        `${encodeURIComponent(key)}=${encodeURIComponent(prop)}`).join('&'):
                            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
                    )
                    .join('&');
            }
            else{
                params = serializeQuery(params)
            }
        }
        const reponse = await Repository.get(
            `${baseUrl}/items/?${params}`
        )
            .then((response) => {
                return {
                    items: response.data.results,
                    totalItems: response.data.count,
                };
            })

            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getBrands() {
        const reponse = await Repository.get(`${baseUrl}/brands`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductCategories() {
        const reponse = await Repository.get(`${baseUrl}/product-categories`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getTotalRecords() {
        const reponse = await Repository.get(`${baseUrl}/products/count`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsById(payload) {
        const reponse = await Repository.get(`${baseUrl}/items/?id=${payload}`)
            .then((response) => {
                return response.data.results[0];
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
 
        return reponse;
    }

    async getProductsByCategory(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/items/?categories=${payload}`
        )
            .then((response) => {
                if (response.data) {
                    if (response.data.length > 0) {
                        return response.data[0];
                    }
                } else {
                    return null;
                }
            })
            .catch(() => {
                return null;
            });
        return reponse;
    }
    async getProductsByBrand(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/brands?slug=${payload}`
        )
            .then((response) => {
                if (response.data) {
                    if (response.data.length > 0) {
                        return response.data[0];
                    }
                } else {
                    return null;
                }
            })
            .catch(() => {
                return null;
            });
        return reponse;
    }

    async getProductsByBrands(payload) {
        let query = '';
        payload.forEach((item) => {
            if (query === '') {
                query = `id_in=${item}`;
            } else {
                query = query + `&id_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByBrands(payload) {
        let query = '';
        payload.forEach((item) => {
            if (query === '') {
                query = `id_in=${item}`;
            } else {
                query = query + `&id_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByPriceRange(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new ProductRepository();
