import Repository, { baseUrl } from './Repository';
import { convertSlugsQueryString } from '../utilities/product-helper';
import axios from 'axios';

class MediaRepository {
    async getCarousels(params) {
        let mobileURL = baseUrl + '/mainpage-carousel/?carousel_type=M'
        let desktopURL = baseUrl + '/mainpage-carousel/?carousel_type=D'
        const reponse = await axios({
            method: 'get',
            url: params.innerWidth >= 1366 ? desktopURL : mobileURL,
            headers: {"Content-Type": "application/json"}, 
            })
            .then((response) => {
                return response.data.results;
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        
        return reponse;
    }

    async getSliderMenu() {
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/menu/?menu_type=left',
            headers: {"Content-Type": "application/json"}, 
            })
            .then((response) => {
                return response.data.results;
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        
        return reponse;
    }
    async getNavigationMenu() {
        const reponse = await axios({
            method: 'get',
            url: baseUrl + '/menu/?menu_type=main',
            headers: {"Content-Type": "application/json"}, 
            })
            .then((response) => {
                return response.data.results;
            })
            .catch((error) => {return { error: JSON.stringify(error) }});
        
        return reponse;
    }
}

export default new MediaRepository();
