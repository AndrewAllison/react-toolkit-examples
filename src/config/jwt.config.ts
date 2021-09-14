const jwtAuthConfig = {
  uri: process.env.REACT_APP_AUTH_API_URL,
  tokenKey: 'auth-token',
  idKey: 'auth-id',
  profileKey: 'profile',
};

export default jwtAuthConfig;
