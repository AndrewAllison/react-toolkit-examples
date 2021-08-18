// A custom theme for this app
import { ThemeOptions } from '@material-ui/core/styles';
import { appColors, darkModeColors } from './colors';

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: appColors.primary,
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#ccff88'
    },
    background: {
      default: appColors.background,
    },
    text: {
      primary: appColors.font,
    },
  },
  shape: {
    borderRadius: 16,
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    action: {
      active: '#6b778c'
    },
    background: {
      default: '#f4f5f7',
      paper: '#ffffff'
    },
    error: {
      contrastText: '#ffffff',
      main: '#ff0000'
    },
    mode: 'light',
    primary: {
      contrastText: darkModeColors.font,
      main: darkModeColors.background
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#222b36'
    },
    success: {
      contrastText: '#ffffff',
      main: '#0000ff'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    },
    warning: {
      contrastText: '#ffffff',
      main: '#ff9800'
    }
  },
  shape: {
    borderRadius: 16
  }
};

export { lightTheme, darkTheme }
