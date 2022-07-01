import { Dispatch } from 'redux';

export enum ProductActionType {
	GET_ALL = '[product] GET_ALL',
	ERROR = '[product] ERROR',
}

export const getProducts = async (dispatch: Dispatch) => {
	try {
		dispatch({
			type: ProductActionType.GET_ALL,
		});
	} catch (error) {
		dispatch({
			type: ProductActionType.ERROR,
		});
	}
};
