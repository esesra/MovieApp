import axios from 'axios';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => {
    const serializedParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      serializedParams.append(key, value);
    });

    serializedParams.append('api_key', apiConfig.apiKey);

    return serializedParams.toString();
  }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;