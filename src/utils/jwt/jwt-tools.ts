import jwtDecode from 'jwt-decode';
import { jwtConfig } from '../../config';
import { JwtBase } from './jwt-base';

const { tokenKey } = jwtConfig;

/**
 * Checks to see if a token is expired or not.
 * @param token a JWT token with an expiration date.
 * @returns {boolean} true if the token is valid false if it has expired.
 */
const isTokenExpired = (token: string): boolean => {
  if(token === null || token === '') return false;
  const { exp } = (jwtDecode(token) as JwtBase);
  return exp * 1000 >= Date.now();
};

const removeToken = () => {
  localStorage.removeItem(tokenKey);
};
const getAccessToken = () => localStorage.getItem(tokenKey);

const setToken = (payload: any) => {
  localStorage.setItem(tokenKey, payload);
};

const verify = (token: string) => {
  try {
    if (!isTokenExpired(token)) {
      removeToken();
      return null;
    }
    return true;
  } catch (e) {
    return false;
  }
};

const getValidAccessToken = () => {
  const storedToken = getAccessToken();
  if (!storedToken) {
    return null;
  }
  try {
    const decodedToken = jwtDecode(storedToken);
    if (!isTokenExpired(decodedToken)) {
      setToken(null);
      return null;
    }
    return storedToken;
  } catch (e) {
    removeToken();
    console.error('FAILED', e);
    return null;
  }
};

export {
  isTokenExpired,
  getAccessToken,
  getValidAccessToken,
  removeToken,
  setToken,
  verify
};
