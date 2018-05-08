import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './reducers/reducers';
import promiseMiddleware from 'redux-promise-middleware';

//let store = createStore(combinedReducer, { myReducer: [] });
let store = createStore(combinedReducer, {}, applyMiddleware( promiseMiddleware() ));

export default store;