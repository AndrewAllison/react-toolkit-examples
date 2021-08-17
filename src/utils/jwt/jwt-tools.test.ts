import { jwtConfig } from '../../config';
import { getAccessToken, getValidAccessToken, isTokenExpired, removeToken, setToken, verify } from './jwt-tools';
import { createMockAccessTokens, createValidAccessToken } from './utils/create-mock-access.tokens';

const localStorageMock = (function() {
  let store: any = {};
  return {
    getItem: function(key: string) {
      return store[key];
    },
    setItem: function(key: string, value: object) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key: string) {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('jwt-tools', () => {
  describe('isTokenValid', () => {
    it('should return false if the token is empty', () => {
      expect(isTokenExpired((''))).toEqual(false);
    });
    it('should return false if the token is expired', () => {
      const token = createMockAccessTokens();

      expect(isTokenExpired(token)).toEqual(false);
    });
    it('should return true if the token is not expired', () => {
      const token = createValidAccessToken();

      expect(isTokenExpired(token)).toEqual(true);
    });
  });
  describe('removeToken', () => {
    it('should remove a stored token', () => {
      const { tokenKey } = jwtConfig;
      window.localStorage.setItem(tokenKey, createValidAccessToken());
      expect(window.localStorage.getItem(tokenKey)).not.toEqual(undefined);

      removeToken();

      expect((window.localStorage.getItem(tokenKey))).toEqual(undefined);
    });
  });
  describe('getAccessToken', () => {
    it('should get a stored token', () => {
      const { tokenKey } = jwtConfig;
      const accessToken = createValidAccessToken();
      window.localStorage.setItem(tokenKey, accessToken);

      const localToken = getAccessToken();

      expect(localToken!).toEqual(accessToken);
    });
  });
  describe('setToken', () => {
    it('should store a string version of the token', () => {
      const { tokenKey } = jwtConfig;
      const accessToken = createValidAccessToken();

      setToken(accessToken);
      const localToken = window.localStorage.getItem(tokenKey);

      expect(localToken!).toEqual(accessToken);
    });
  });
  describe('verify', () => {
    it('should return true when a token is not expired and actually exists.', () => {
      const accessToken = createValidAccessToken();

      const isValid = verify(accessToken);

      expect(isValid).toEqual(true);
    });
    it('should remove the local token when it is expired', () => {
      const { tokenKey } = jwtConfig;

      const accessToken = createMockAccessTokens();
      window.localStorage.setItem(tokenKey, accessToken);


      const isValid = verify(accessToken);
      const localToken = window.localStorage.getItem(tokenKey);

      expect(isValid).toEqual(null);
      expect(localToken).toEqual(undefined);
    });
  });
  describe('createValidAccessToken', () => {
    it('should return a valid accessToken from storage', () => {
      const accessToken = createValidAccessToken();
      const { tokenKey } = jwtConfig;

      window.localStorage.setItem(tokenKey, accessToken);
      const validToken = getValidAccessToken();

      expect(validToken).toEqual(accessToken);
    });
    it('should return null if its an invalid accessToken from storage', () => {
      const accessToken = createMockAccessTokens();
      const { tokenKey } = jwtConfig;

      window.localStorage.setItem(tokenKey, accessToken);
      const validToken = getValidAccessToken();

      expect(validToken).toEqual(null);
    });
  });

});
