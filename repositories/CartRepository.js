import Repository, { baseUrl, serializeQuery } from './Repository';
import axios from 'axios';

class CartRepository {
    constructor(callback) {
        this.callback = callback;
    }
    
    async addToCart(product) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email;
        
        const response = await axios({
            method: 'post',
            url: baseUrl + '/cart/add/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                customer: email,
                product: product.product.id,
                quantity: product.quantity,
              }),
            })
            .then((response) => {
                return response.data.id;
            })
            .catch((error) =>  {return { error: JSON.stringify(error) }});
        return response;
    }

    async removeFromCart(cartItemId){
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const response = await axios({
            method: 'delete',
            url: baseUrl + '/cart/remove/'+cartItemId,
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            })
            .then((response) => {
                return response;
            })
            .catch((error) =>  {return { error: JSON.stringify(error) }});
        return response;
    }

    // async addToCartGuest(e) {
    //     const response = await axios({
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
    //     return response;
    // }

    async getCart() {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const response = await axios({
            method: 'get',
            url: baseUrl + '/cart/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }
}

export default new CartRepository();
