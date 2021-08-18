import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { ThemeProvider } from "@material-ui/core";
import { lightTheme } from '../src/themes/theme';
import { createTheme } from '@material-ui/core/styles';

const withThemeProvider = (Story, context) => {
  const theme = createTheme(lightTheme);
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

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

export const decorators = [withThemeProvider];
