import axios from 'axios';
import { ACCESS_TOKEN, HTTP_METHODS } from '../constants';
import { LocalStorage } from '../util/LocalStorage';

const axiosInstance = axios.create({
  baseURL: 'http://ec2-3-105-103-8.ap-southeast-2.compute.amazonaws.com:8080',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

const handleRequest = (config) => {
  const TOKEN = LocalStorage.getItem(ACCESS_TOKEN);
  return TOKEN
    ? {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${TOKEN}`,
        },
        withCredential: true,
      }
    : config;
};

const handleResponse = (response) => {
  return response.data;
};

const handleError = (error) => {
  if (error instanceof Error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error);
      }
      if (error.request) {
        throw new Error(error);
      }
    } else {
      throw new Error(error.message);
    }
  }
  throw new Error(error);
};

const createApiMethod = (_axiosInstance, methodType) => (config) =>
  _axiosInstance({ ...handleRequest(config), method: methodType })
    .then(handleResponse)
    .catch(handleError);

export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
