import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import React from 'react';

const SignOut = () => {
  const { logout } = useAuth0();
  const onSignOut = () => {
    logout({
      returnTo: window.location.origin,
    });
  };
  return (
    <Button
      className="sign-out"
      onClick={onSignOut}
    >
      Sign Out
    </Button>
  );
};

export default SignOut;
