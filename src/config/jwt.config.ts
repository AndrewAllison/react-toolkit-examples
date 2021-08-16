const jwtAuthConfig = {
  uri: process.env.REACT_APP_AUTH_API_URL,
  tokenKey: 'auth-token',
  idKey: 'auth-id'
};

export default jwtAuthConfig;
