import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { lightTheme,  darkTheme } from '../src/themes/theme';

const withThemeProvider = (Story, context) => {
  const selectTheme = (themeName) => {
    const themeChoices = {
      light: lightTheme,
      dark: darkTheme
    };
    return themeChoices[themeName.toLowerCase()];
  };
  const theme = selectTheme(context.globals.theme);
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={{
          backgroundColor: theme.palette.background.default,
          height: '100%',
          p: 4
        }}>
          <Story {...context} />
        </Box>
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#efefef',
      },
      {
        name: 'facebook',
        value: '#000000',
      },
    ],
  },
  
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [withThemeProvider];
