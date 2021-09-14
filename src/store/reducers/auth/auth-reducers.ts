import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isAuthenticated: false,
};

const authlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      return { isAuthenticated: action.payload };
    },
  },
});

export const { setIsAuthenticated } = authlice.actions;
const authReducer = authlice.reducer;
export default authReducer;
