import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from "./rootReducer";
// import {loggerMiddleware} from "../middlewares/loggerMiddleware";
// import {botMiddleware} from "../middlewares/botMiddleware";
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25
});

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['profile']
};

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, botMiddleware)));

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, rootReducer,),
         initialStore,
         composeEnhancers(
             applyMiddleware(logger, thunk))
    );
    const persistor = persistStore(store);
    return {store, persistor};
};