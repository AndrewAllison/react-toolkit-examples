import { combineReducers } from '@reduxjs/toolkit';
import { api } from 'src/api/generated';
import authReducer from './reducers/auth/auth-reducers';
import tokenReducer from './reducers/auth/token-reducers';
import darkModeReducer from './reducers/dark-mode/reducer';
import profileReducer from './reducers/profile/profile-reducers';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  profile: profileReducer,
  auth: authReducer,
  token: tokenReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
