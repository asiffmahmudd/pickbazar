import {createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { CartReducer } from './Reducers/CartReducer';

const combineReducer = combineReducers({
    items: CartReducer 
})

export const store = createStore(combineReducer, composeWithDevTools())