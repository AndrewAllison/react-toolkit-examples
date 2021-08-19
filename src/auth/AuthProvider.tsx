import { Auth0Provider } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { authConfig } from '../config';

const AuthProvider = (props: PropsWithChildren<any>) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: any) => {
    navigate(appState?.retufnTo || window.location.pathname);
  };
  const { children } = props;
  return (
    <Auth0Provider
      domain={authConfig.auth0Domain}
      clientId={authConfig.auth0ClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
