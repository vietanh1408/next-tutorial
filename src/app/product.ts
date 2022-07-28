import axiosClient from './axios-client';

export const productApi = {
	getAll() {
		return axiosClient.get('/api/products');
	},
};
