import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import { StoreState } from '../types/index';

import thunk from "redux-thunk";
import logger from 'redux-logger'

import { composeWithDevTools } from 'redux-devtools-extension'

export default function () {
  const store = createStore(reducers, composeWithDevTools, applyMiddleware(thunk, logger));
  return store;
}