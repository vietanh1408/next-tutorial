import {
	AnyAction,
	combineReducers,
	configureStore,
	ConfigureStoreOptions,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import productSlice, {
	initialState as productInitialState,
	IProductState,
} from './product/productSlice';
export interface IState {
	product: IProductState;
}

const initialState: IState = {
	product: productInitialState,
};

const combinedReducer = combineReducers({
	product: productSlice,
});

const masterReducer = (state: IState = initialState, action: AnyAction) => {
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

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper(makeStore, {
	debug: process.env.NODE_ENV === 'development',
});
