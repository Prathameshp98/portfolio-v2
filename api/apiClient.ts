import axios from 'axios';
import { API } from '@/constants/constant';

const apiClient = axios.create({
  baseURL: API.baseURL,             
});

export default apiClient;