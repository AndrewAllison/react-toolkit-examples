import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE,
} from 'redux-persist';
import { api } from 'src/api/generated';
import persistedReducer from './persist/persist.config';

const ignoredActions = [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER];

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions,
    },
  }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
