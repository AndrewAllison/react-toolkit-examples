import { PayloadAction } from '@reduxjs/toolkit';
import darkModeReducer, { initialState, setProfile } from './profile-reducers';

describe('profile reducer', () => {
  test('should return the initial state as null', () => {
    expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });
  test('should enable dark mode if it is disabled', () => {
    const profile = { id: '12345' };
    expect(darkModeReducer(profile, setProfile)).toEqual(profile);
  });
});
