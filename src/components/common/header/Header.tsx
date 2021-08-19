import { useAuth0 } from '@auth0/auth0-react';
import {
  AppBar, Switch, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { Brightness2 as DarkModeIcon } from '@material-ui/icons';
import { toggleDarkMode } from '../../../store/reducers/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import AuthenticatedButtons from './AuthenticatedButtons';
import UnauthenticatedButtons from './UnauthenticatedButtons';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flex: '1' }}>App</Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons /> }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
