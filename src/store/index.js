import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { storage } from '@/storage';
import { rootReducer } from '@/reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'status']
};

const middlewares = [thunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
