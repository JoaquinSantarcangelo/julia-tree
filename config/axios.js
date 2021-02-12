import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://the-julia-tree-api.herokuapp.com'
});

export default axiosClient;