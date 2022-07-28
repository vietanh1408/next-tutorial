import { productApi } from '@/app';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface IProductState {
	list: string[];
	detail: any;
	loading: boolean;
}

export const initialState: IProductState = {
	list: [],
	detail: null,
	loading: false,
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
	try {
		const response = await productApi.getAll();
		console.log('response: ', response);
		return response.data;
	} catch (error) {
		console.log('error: ', error);
	}
});

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		getAll(state, action) {
			return { ...state, list: action.payload, loading: true };
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			console.log('payload: ', action.payload);
		},
	},
});

const { reducer } = productSlice;
export const { getAll } = productSlice.actions;
export default reducer;
