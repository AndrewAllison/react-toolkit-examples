import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import React from 'react';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const onSignIn = () => {
    loginWithRedirect();
  };
  return (
    <Button
      className="sing-in"
      onClick={onSignIn}
    >
      Sign In
    </Button>
  );
};

export default SignIn;
