import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import {applyMiddleware, createStore} from 'redux';
import {FAILURE, STARTED, SUCCESS} from "../constants/actionTypes";
import rootReducer from "./reducers";

let middleware = [
    promiseMiddleware({promiseTypeSuffixes: [STARTED, SUCCESS, FAILURE]}),
    thunkMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
