import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { client } from '../../api/api';
import { useTokenMutation } from '../../api/enhanced';
import { AuthorizeMutationVariables, TokenMutationVariables, useAuthorizeMutation } from '../../api/generated';
import PasswordControl from '../../components/common/forms/PasswordControl';
import StringControl from '../../components/common/forms/StringControl';
import { PageNotification } from '../../components/common/notifications/PageNotification';
import { useAppDispatch } from '../../store/hooks';
import { setIsAuthenticated } from '../../store/reducers/auth/auth-reducers';
import { setAccessToken } from '../../store/reducers/auth/token-reducers';
import { setProfile } from '../../store/reducers/profile/profile-reducers';

const initialValues = {
  email: 'hg1@hogwarts.edu.org',
  password: '$azzYW1tch',
};

const schema = Yup
  .object()
  .shape({
    email: Yup
      .string()
      .email('Please enter a valid email')
      .max(255)
      .required('An email address must be entred'),
    password: Yup
      .string()
      .max(255)
      .required('Please type your password'),
  });

const Login = (props) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    delayError: 400,
    defaultValues: initialValues,
  });
  const [authorize, { error, isLoading }] = useAuthorizeMutation();
  const [token] = useTokenMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const authResponse = await authorize({
      authorizeLoginDetails: {
        email,
        password,
      },
    } as AuthorizeMutationVariables);
    if (!(authResponse as any).error) {
      const { code, uic } = (authResponse as any)?.data?.authorize;
      const authTokenResponse = await token({
        tokenTokenRequest: {
          uic,
          code,
        },
      } as TokenMutationVariables);
      if (!(authTokenResponse as any).error) {
        const { accessToken, profile } = (authTokenResponse as any)?.data?.token;
        dispatch(setProfile(profile));
        dispatch(setIsAuthenticated(true));
        dispatch(setAccessToken(accessToken));
        client.setHeader('Authorization', `Bearer ${accessToken}`);
        navigate('/')
      }
    }
  }

  return (
    <div className="login" style={{ marginTop: '66px' }}>
      <Typography variant="h1">Login</Typography>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        {error && (
          <PageNotification message={error?.message.split(':')[0]} title="Error" severity="error" />
        )}

        <StringControl
          control={control}
          label="Email"
          placeholder="Enter an email address"
          propName="email"
        />
        <PasswordControl control={control} />
        <Button disabled={isLoading} fullWidth type="submit" variant="contained"> Submit </Button>
      </form>
    </div>
  );
}

export default Login;
