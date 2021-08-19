import { Box, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';

const Home = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundClip: theme.palette.background.default,
      mt: 2,
      width: '100%',
    }}
    >
      <Typography variant="h1">Welcome</Typography>
    </Box>
  );
};

export default Home;
