import Repository, { baseUrl, serializeQuery } from './Repository';
import axios from 'axios';

class CartRepository {
    constructor(callback) {
        this.callback = callback;
    }
    async addToCart(product) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email;
        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/orders/add-to-cart/',
            headers: {"Content-Type": "application/json", "Authorization": "JWT "+token}, 
            data: JSON.stringify({
                customer: email,
                product: product.products[0].id,
                quantity: product.quantity,
              }),
            })
            .then((response) => {
                return response.data.id;
            })
            .catch((error) =>  {return { error: JSON.stringify(error) }});
        return reponse;
    }
    async removeFromCart(cartItemId){
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'delete',
            url: baseUrl + '/orders/remove-from-cart/'+cartItemId,
            headers: {"Content-Type": "application/json", "Authorization": "JWT "+token}, 
            })
            .then((response) => {
                return response;
            })
            .catch((error) =>  {return { error: JSON.stringify(error) }});
        return reponse;
    }

    // async addToCartGuest(e) {
    //     const reponse = await axios({
    //         method: 'post',
    //         url: baseUrl + 'orders/guest/add-to-cart/',
    //         headers: {"Content-Type": "application/json"}, 
    //         data: JSON.stringify({
    //             customer: "deneme@deneme.com",
    //             product: 1,
    //             quantity: 2,
    //           }),})
    //         .then((response) => {
    //             console.log("\n\n\nRepo", response);
    //             return response.data;
    //         })
    //         .catch((error) => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // }
    async getCart() {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/customers/profile/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token,}, 
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse.results[0];
    }
}

export default new CartRepository();
