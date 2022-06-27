import axios from 'axios';
// const baseDomain = 'http://192.168.0.208:8000/api'; // API for products

const baseDomain = 'http://164.92.140.87:1337/api'; // API for products


export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
