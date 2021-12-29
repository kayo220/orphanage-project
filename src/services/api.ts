import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw-happy-kayo.herokuapp.com/'
})

export default api;