import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const rootReducer = combineReducers({ reducer })
const store = configureStore({ reducer: rootReducer });
export default store;