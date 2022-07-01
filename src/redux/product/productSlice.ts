import { createSlice } from '@reduxjs/toolkit';

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

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		getAll(state) {
			return { ...state, list: ['123'], loading: true };
		},
	},
});

const { reducer } = productSlice;
export const { getAll } = productSlice.actions;
export default reducer;
