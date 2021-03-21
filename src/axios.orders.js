import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-adc9f-default-rtdb.firebaseio.com/'
});

export default instance;