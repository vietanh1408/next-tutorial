import {
	AnyAction,
	combineReducers,
	configureStore,
	ConfigureStoreOptions,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import productSlice, { IProductState } from './product/productSlice';
export interface RootState {
	product: IProductState;
}

const combinedReducer = combineReducers({
	product: productSlice,
});

const masterReducer = (state: any, action: AnyAction) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	} else {
		return combinedReducer(state, action);
	}
};

export const makeStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
	configureStore({
		reducer: masterReducer,
		...options,
		devTools: process.env.NODE_ENV !== 'production',
		middleware: [thunk],
	});

export const wrapper = createWrapper(makeStore, {
	debug: process.env.NODE_ENV === 'development',
});
