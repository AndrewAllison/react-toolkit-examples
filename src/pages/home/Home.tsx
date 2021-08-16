import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';

const Home = () => {
  const theme = useTheme();
  return <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundClip: theme.palette.background.default,
  }}>
    <Box sx={{
      padding: theme.spacing(2),
      fontSize: '30px',
      color: theme.palette.text.primary,
    }}>Welcome
    </Box>
  </Box>;
};

export default Home;
