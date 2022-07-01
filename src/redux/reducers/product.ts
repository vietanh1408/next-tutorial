import { Action } from 'redux';
import { ProductActionType } from '../actions/product';

export interface IProductReducer {
	list: string[];
	detail: any;
	loading: boolean;
}

export const initialState: IProductReducer = {
	list: [],
	detail: null,
	loading: false,
};

const productReducer = (state: IProductReducer = initialState, action: Action) => {
	switch (action.type) {
		case ProductActionType.GET_ALL:
			return { ...state, list: ['123'], loading: true };

		default:
			return state;
	}
};

export default productReducer;
