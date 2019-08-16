import rootReducer from '../reducers'; //Tree
import { createStore, applyMiddleware, compose } from 'redux'; // Redux 组件
import thunkMiddleware from 'redux-thunk'; // Logger
import { createLogger } from 'redux-logger'; // Logger2

const loggerMiddleware = createLogger(); // Create Tree

const logger = store => next => action => { // Logger Show
    if (console) {
        console.log('dispatching', action);
    }
    next(action);
    if (console) {
        console.log('next state', store.getState());
    }
};

const applyMiddlewareFunc = process.env.SOA_ENV === 'production' ?
    applyMiddleware(thunkMiddleware) :
    applyMiddleware(thunkMiddleware, loggerMiddleware, logger);

export default function configureStore(preLoadedState) { // Create Object
    const store = createStore(
        rootReducer,
        preLoadedState,
        // applyMiddleware( thunkMiddleware )
        applyMiddlewareFunc
    );
    return store;
}