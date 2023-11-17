import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import configsReducer from './configs';

const rootReducer = combineReducers({
	configs: configsReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk],
});
