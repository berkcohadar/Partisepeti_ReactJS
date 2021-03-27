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
                email: e.username,
                password1: e.password,
                password2: e.password,
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

export default new UserRepository();
