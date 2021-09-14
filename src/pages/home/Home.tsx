import { Box, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileQuery } from '../../api/generated';
import { useAppSelector } from '../../store/hooks';

const Home = () => {
  const theme = useTheme();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { data: profile } = useProfileQuery()
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

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
      {isAuthenticated
      && (
        <Typography variant="h1">
          Welcome
        </Typography>
      )}
    </Box>
  );
};

export default Home;
