import { applyMiddleware, createStore, compose } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from './reducers/index'

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// middleware config
const enableLogs = process.env.REACT_APP_ENABLE_LOGS === "off";
// const allowReduxDevTools = enableLogs ? false : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middlewares = [enableLogs ? false : logger, thunk].filter(Boolean);

// compose config 
const composeEnhancers = compose;

// export and create the store instance, while passing combined reducers and middleware 
const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;

export const persistore = persistStore(store)
