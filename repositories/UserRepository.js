import Repository, { baseUrl, serializeQuery } from './Repository';
import axios from 'axios';
import initState from "~/store/auth/reducer"
class UserRepository {
    constructor(callback) {
        this.callback = callback;
    }
    async loginRequest(e) {
        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/auth/login/',
            headers: {"Content-Type": "application/json"}, 
            data: JSON.stringify({
                email: e.username,
                password: e.password,
              }),})
            .then((response) => {
                return response.data;
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        
        return reponse;
    }

    async registerRequest(e) {
        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/auth/registration/',
            headers: {"Content-Type": "application/json"}, 
            data: JSON.stringify({
                first_name: e.first_name,
                last_name: e.last_name,
                email: e.username,
                password: e.password,
              }),})
            .then((response) => {
                return response.data;
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        
        return reponse;
    }

    async profileRequest() {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/auth/user/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async profileUpdateRequest(e) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'put',
            url: baseUrl + '/auth/user/update/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                user: {
                    first_name: e.first_name,
                    last_name: e.last_name
                },
                date_of_birth: e.date_of_birth,
                // phone: e.phone,
                gender: e.gender,
              }),
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        console.log(reponse)
        return reponse;
    }

    async getAdressesRequest() {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/customer/address/list/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token,}, 
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse.results[0];
    }

    async addAdressesRequest(e) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        e.email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email;
        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/customer/address/create/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                "customer": e.email,
                "first_name": e.first_name,
                "last_name": e.last_name,
                "phone": e.phone,
                "city": e.city,
                "district": e.district,
                "address": e.address,
                "zip": e.zip,
                "country": e.country,
                "active": true,
                "type": "Billing Address"
              }),
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse.results[0];
    }
    
    async updateAdressesRequest(e) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/customer/address/update/'+e.id+'/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                "customer": e.email,
                "first_name": e.first_name,
                "last_name": e.last_name,
                "phone": e.phone,
                "city": e.city,
                "district": e.district,
                "address": e.address,
                "zip": e.zip,
                "country": e.country,
                "active": true,
                "type": "Billing Address"
              }),
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse.results[0];
    }
    
    async deleteAdressesRequest(e) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/customer/address/delete/'+e.id+'/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token},
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse.results[0];
    }
}
// Müşteri Üyelik Bilgileri GET:  api/profile/ 
// Müşteri Üyelik Bilgileri UPDATE: api/profile/update/
// Müşteri Adres Bilgileri  GET: api/profile/address/
// Müşteri Adres Bilgileri  ADD: api/profile/address/add/
// Müşteri Adres Bilgisi  UPDATE: api/profile/address/update/<address_id>/
// Müşteri Adres Bilgisi  DELETE: api/profile/address/delete/<address_id>/
// Müşteri Sipariş Bilgisi GET: api/orders/customer-orders/
export default new UserRepository();
