import Repository, { baseUrl, serializeQuery } from './Repository';
import axios from 'axios';

class CartRepository {
    constructor(callback) {
        this.callback = callback;
    }
    
    async addToCart(product) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        console.log(token)
        const email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email;
        console.log(JSON.stringify({
            customer: email,
            product: product.product.id,
            quantity: product.quantity,
          }),)
        const response = await axios({
            method: 'post',
            url: baseUrl + '/orders/add-to-cart/',
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
            url: baseUrl + '/orders/remove-from-cart/'+cartItemId,
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
            url: baseUrl + '/orders/cart/',
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
