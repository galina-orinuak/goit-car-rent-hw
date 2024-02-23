import axios from "axios";

axios.defaults.baseURL = 'https://65d87f93c96fbb24c1bba7d8.mockapi.io/api';

export const fetchAll = async() => {
    const response =  await axios.get('/cars');
    return response.data
}