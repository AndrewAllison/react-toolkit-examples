import { createTheme, responsiveFontSizes, ThemeOptions } from '@material-ui/core/styles';
import darkScrollbar from '@material-ui/core/darkScrollbar';
import { appColors, darkModeColors } from './colors';

const baseLine = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
        ...darkScrollbar(),
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  },
}

const theme1: ThemeOptions = {
  components: {
    ...baseLine,
  },
  palette: {
    mode: 'light',
    primary: {
      main: appColors.primary,
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#ccff88',
    },
    background: {
      paper: '#ffffff',
      default: '#cfcfcf',
    },
    text: {
      primary: appColors.font,
    },
  },
  shape: {
    borderRadius: 16,
  },
};
const theme2: ThemeOptions = {
  components: {
    ...baseLine,
  },
  palette: {
    action: {
      active: '#6b778c',
    },
    background: {
      default: '#171c24',
      paper: '#222b36',
    },
    error: {
      contrastText: '#ffffff',
      main: '#ff0000',
    },
    mode: 'dark',
    primary: {
      contrastText: '#ffffff',
      main: '#f1bf3a',
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#222b36',
    },
    success: {
      contrastText: '#ffffff',
      main: '#0000ff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#B5BABA',
    },
    warning: {
      contrastText: '#ffffff',
      main: '#ff9800',
    },
  },
  shape: {
    borderRadius: 16,
  },
};

const lightTheme = responsiveFontSizes(createTheme(theme1));
const darkTheme = responsiveFontSizes(createTheme(theme2));

export { lightTheme, darkTheme };
