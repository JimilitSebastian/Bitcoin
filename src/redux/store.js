import reducer from "./reducer";
import {combineReducers , createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mysaga from './sagas';

const SagaMiddleware = createSagaMiddleware();
const rootReduer = combineReducers({reducer});
const store = createStore(rootReduer, applyMiddleware(SagaMiddleware));
SagaMiddleware.run(mysaga);

export default store;
