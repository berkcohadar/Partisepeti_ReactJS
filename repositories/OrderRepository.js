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
            url: baseUrl + '/checkout/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                items: e.cartItems,
                first_name: e.first_name,
                last_name: e.last_name,
                email: e.email,
                address: e.address,
                city: e.city,
                country: e.country,
                zip_code: e.zip_code,
                phone: e.phone,
              }),})
            .then((response) => {
                return response.data;
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        
        return reponse;
    }
    async checkPaymentHelper(order_token){
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/checkout/payment-control/'+order_token, //checkout/payment-control/TOKEN
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
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
            url: baseUrl + '/customer/order/list/',
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
