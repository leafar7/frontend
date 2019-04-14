import axios from 'axios';

const api = axios.create({
    baseURL: "https://rafael-backend.herokuapp.com"
});

export default api;