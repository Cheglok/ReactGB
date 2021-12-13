import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from "./rootReducer";
// import createSagaMiddleware from 'redux-saga';
// import {loggerMiddleware} from "../middlewares/loggerMiddleware";
// import {botMiddleware} from "../middlewares/botMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25
});

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['profile'],
};

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, rootReducer),
         initialStore,
         composeEnhancers(
             applyMiddleware(logger, thunk))
    );
    const persistor = persistStore(store);
    return {store, persistor};
};