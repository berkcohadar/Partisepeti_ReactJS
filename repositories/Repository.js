import axios from 'axios';
// const baseDomain = 'http://165.22.85.114/api'; // API for products
const baseDomain = 'http://192.168.0.145:8000/api'; // API for products


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