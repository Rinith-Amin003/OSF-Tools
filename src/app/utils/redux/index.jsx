import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appRepository from './reducers';

const rootReducer = combineReducers({ appRepository })
const store = configureStore({ reducer: rootReducer });
export default store;