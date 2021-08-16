import { combineReducers } from '@reduxjs/toolkit';
import darkModeReducer from './reducers/dark-mode/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer
});

export default rootReducer;
