import axios from 'axios';
const baseURL = 'https://portfoliov2backend1-f5j93yxk.b4a.run/';

const apiClient = axios.create({
  baseURL: baseURL,             
});

export default apiClient;