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
                first_name: e.firstName,
                last_name: e.lastName,
                email: e.email,
                address: e.address,
                city: e.city,
                country: "Turkiye",
                zip_code: e.postalCode,
                phone: "5382721098",
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
            url: baseUrl + '/checkout/payment-control/'+token, //checkout/payment-control/TOKEN
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
            url: baseUrl + '/checkout/order/list/',
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
