import { createSlice } from '@reduxjs/toolkit';

export const initialState = null;

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, profile) {
      return profile.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
const profileReducer = profileSlice.reducer;
export default profileReducer;
