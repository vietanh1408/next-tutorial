import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { Action, AnyAction, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer from './reducers';
import { initialState as productInitialState, IProductReducer } from './reducers/product';

interface IState {
	product: IProductReducer;
}

const initialState: IState = {
	product: productInitialState,
};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);
	middlewares.push(logger);
}

const reducers = (state: IState = initialState, action: AnyAction) => {
	if (action.type === HYDRATE) {
		return {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
	}
	return rootReducer(initialState, action);
};

export const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, {
	debug: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
