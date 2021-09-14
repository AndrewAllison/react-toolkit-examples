import { Button } from '@material-ui/core';
import React from 'react';
import { AuthorizeMutationVariables, useAuthorizeMutation } from '../api/generated';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setProfile } from '../store/reducers/profile/profile-reducers';

const SignIn = () => {
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const [authorize] = useAuthorizeMutation();

  const onSetProfile = () => {
    dispatch(setProfile({ id: '12345' }));
  };

  const onSignOut = () => {
    dispatch(setProfile(null));
  }

  const onSignIn = async () => {
    const result = await authorize({
      authorizeLoginDetails: {
        email: '',
        password: '',
      },
    } as AuthorizeMutationVariables);
    console.log(result);
    onSetProfile();
  };

  return (!profile
    ? (
      <Button
        className="signIn"
        onClick={onSignIn}
        color="primary"
      >
        Sign In
      </Button>
    ) : (
      <Button
        className="signIn"
        onClick={onSignOut}
        color="primary"
      >
        Sign Out
      </Button>
    )
  );
};

export default SignIn;
