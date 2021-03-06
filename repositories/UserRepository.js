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
            url: baseUrl + '/auth/register/',
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
        console.log("request", JSON.stringify({
            first_name: e.first_name,
            last_name: e.last_name,
            birth_date: e.date_of_birth,
            gender: e.gender,
          }))
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const reponse = await axios({
            method: 'put',
            url: baseUrl + '/auth/user/update/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                first_name: e.first_name,
                last_name: e.last_name,
                birth_date: e.date_of_birth,
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
        return reponse.results;
    }

    async addAdressesRequest(e) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email;

        const reponse = await axios({
            method: 'post',
            url: baseUrl + '/customer/address/create/',
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                "customer": email,
                "first_name": e.first_name,
                "last_name": e.last_name,
                "phone": e.phone,
                "title": e.title,
                "address": e.address,
                "zip_code": e.zip_code,
                "city": e.city,
                "country": e.country,
                "is_active": e.is_active,
                "address_type": e.address_type,
              }),
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    
    async updateAdressesRequest(e) {
        const token = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).token;
        const email = JSON.parse(JSON.parse(localStorage.getItem('persist:partisepeti')).auth).email;

        const reponse = await axios({
            method: 'put',
            url: baseUrl + '/customer/address/update/'+e.id,
            headers: {"Content-Type": "application/json", "Authorization": "Token "+token}, 
            data: JSON.stringify({
                "customer": email,
                "first_name": e.first_name,
                "last_name": e.last_name,
                "phone": e.phone,
                "title": e.title,
                "address": e.address,
                "zip_code": e.zip_code,
                "city": e.city,
                "country": e.country,
                "is_active": e.is_active,
                "address_type": e.address_type,
              }),
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
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
        return reponse;
    }
}
// M????teri ??yelik Bilgileri GET:  api/profile/ 
// M????teri ??yelik Bilgileri UPDATE: api/profile/update/
// M????teri Adres Bilgileri  GET: api/profile/address/
// M????teri Adres Bilgileri  ADD: api/profile/address/add/
// M????teri Adres Bilgisi  UPDATE: api/profile/address/update/<address_id>/
// M????teri Adres Bilgisi  DELETE: api/profile/address/delete/<address_id>/
// M????teri Sipari?? Bilgisi GET: api/orders/customer-orders/
export default new UserRepository();
