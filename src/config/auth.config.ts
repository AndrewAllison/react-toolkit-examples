const authConfig = {
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
  baseUrl: process.env.REACT_APP_BASE_URL,
};
export default authConfig;
