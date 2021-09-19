import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const persistConfig = {
    key: 'partisepeti',
    storage,
    whitelist: ['cart', 'compare', 'auth', 'wishlist', 'user','collection','order'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

// const deneme = (state, action) => {
//     // when a logout action is dispatched it will reset redux state
//     if (action.type === 'USER_LOGGED_OUT') {
//       state = undefined;
//     }
  
//     return rootReducer(state, action);
//   };

export default configureStore;
