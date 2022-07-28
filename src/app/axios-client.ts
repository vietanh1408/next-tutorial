import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosClient.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		return config;
	},
	(error: AxiosRequestConfig) => {
		return Promise.reject(error);
	},
);

axiosClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response.data;
	},
	(error: any) => {
		return Promise.reject(error?.response?.data);
	},
);

export default axiosClient;
