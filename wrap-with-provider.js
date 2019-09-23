import React from 'react';
import { Provider } from 'react-redux';
import store, { persistore } from './src/redux/createStore'
import { PersistGate } from 'redux-persist/integration/react'

export default ({ element }) => (
    <Provider store={store}>
        <PersistGate persistor={persistore}>
            {element}
        </PersistGate>
    </Provider >
);