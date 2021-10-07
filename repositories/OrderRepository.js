import { baseUrl } from './Repository';
import axios from 'axios';

class UserRepository {
    constructor(callback) {
        this.callback = callback;
    }
    async createOrderRequest(e) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/orders/create-order/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                cart_items: e.cartItems,
                customer: e.email,
                shippingAddress_first_name: e.firstName,
                shippingAddress_last_name: e.lastName,
                shippingAddress_phone: "5382721098",
                shippingAddress_address: e.address,
                shippingAddress_zip: e.postalCode,
                shippingAddress_city: e.city,
                shippingAddress_country: "Turkiye",
                billingAddress_first_name: e.firstName,
                billingAddress_last_name: e.lastName,
                billingAddress_phone: "5382721098",
                billingAddress_address: e.address,
                billingAddress_zip: e.postalCode,
                billingAddress_city: e.city,
                billingAddress_country: "Turkiye",
                coupon: "",                
              }),})
            .then((response) => {
                return response.data;
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        
        return reponse;
    }
    async checkPaymentHelper(token){
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/orders/check-order-payment/'+token, //checkout/payment-control/TOKEN
            headers: {"Content-Type": "application/json"}, 
            })
            .then((response) => {
                return response.data.results[0];
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        return reponse;
    }
    async getOrdersRequest() {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/orders/customer-orders/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse.results;
    }
}

export default new UserRepository();
