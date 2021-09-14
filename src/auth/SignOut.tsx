import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setIsAuthenticated } from '../store/reducers/auth/auth-reducers';

const SignOut = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const onSignOut = () => {
    dispatch(setIsAuthenticated(false));
    navigate(`${window.location.origin}/login`);
  };
  return (
    <Button
      className="signOut"
      onClick={onSignOut}
    >
      Sign Out
    </Button>
  );
};

export default SignOut;
