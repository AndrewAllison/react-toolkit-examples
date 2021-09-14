import { persistReducer } from 'redux-persist';
// import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../rootReducer';
import TokenTransform from './test-transform';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['darkMode', 'profile', 'auth', 'token'],
  transforms: [TokenTransform],
  // TODO: https://github.com/maxdeviant/redux-persist-transform-encrypt#secret-key-selection
  // transforms: [
  //   encryptTransform({
  //     secretKey: 'my-super-secret-key',
  //     onError(error) {
  //       // Handle the error.
  //       console.log(error);
  //     },
  //   }),
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
