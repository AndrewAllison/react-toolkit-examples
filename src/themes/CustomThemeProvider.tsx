import { CssBaseline } from '@material-ui/core';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles';
import React, { PropsWithChildren } from 'react';
import { useAppSelector } from '../store/hooks';
import { lightTheme, darkTheme } from './theme';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  const darkMode = useAppSelector(state => state.darkMode);
  const theme = createTheme(darkMode ? lightTheme : darkTheme);
  return <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
      </ThemeProvider>
    </StyledEngineProvider>;
};

export default CustomThemeProvider;

