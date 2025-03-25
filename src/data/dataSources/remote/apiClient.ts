import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';
import {API_KEY, API_URL} from '@env';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    language: 'en-US',
    'api-key': API_KEY,
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.request.use(request => {
  console.log('Request', JSON.stringify(request, null, 2));
  return request;
});

apiClient.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2));
  return response;
});

export default apiClient;
