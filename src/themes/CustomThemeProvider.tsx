import { CssBaseline } from '@material-ui/core';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles';
import React, { PropsWithChildren } from 'react';
import { useAppSelector } from '../store/hooks';
import { appColors, darkModeColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  const darkMode = useAppSelector(state => state.darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
      background: {
        default: darkMode ? darkModeColors.background : appColors.background,
      },
      text: {
        primary: darkMode ? darkModeColors.font : appColors.font,
      },
    },
  });
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  </StyledEngineProvider>;
};

export default CustomThemeProvider;

