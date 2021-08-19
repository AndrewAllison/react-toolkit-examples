import jwtDecode from 'jwt-decode';
import { jwtConfig } from '../../config';
import { JwtBase } from './models/jwt-base';

const { tokenKey } = jwtConfig;

/**
 * Checks to see if a token is expired or not.
 * @param token a JWT token with an expiration date.
 * @returns {boolean} true if the token is valid false if it has expired.
 */
const isTokenExpired = (token: string): boolean => {
  if (token === null || token === '') return false;
  const { exp } = (jwtDecode(token) as JwtBase);
  return exp * 1000 >= Date.now();
};

/**
 * Removes the authentication token from local storage
 */
const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

/**
 * Gets the currently stored access token
 * @returns {string | undefined} A stringified version of the stored token or undefined
 */
const getAccessToken = () => localStorage.getItem(tokenKey);

/**
 * Sets the accessToken in local storage
 * @param accessToken {string} The accessToken to store
 */
const setToken = (accessToken: string) => {
  localStorage.setItem(tokenKey, accessToken);
};

/**
 * Verifies that the token exists and that it is not expired
 * @param token {string} The auth token to be verified
 * @returns {boolean | null} true if the token is not expired, null if it is expired.
 */
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

/**
 * Returns a valid accessToken from local storage
 * @returns {string | null} A string version of the accessToken or null if it's empty / invalid
 */
const getValidAccessToken = () => {
  const storedToken = getAccessToken();
  if (!storedToken) return null;
  try {
    return verify(storedToken) ? storedToken : null;
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
  verify,
};
