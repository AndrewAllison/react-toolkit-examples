import { Box } from '@material-ui/core';
import { Meta } from '@storybook/react';
import React from 'react';
import Home from '../../pages/home/Home';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta;

export const Primary = () => <Box sx={{ m: 4 }}><Home /></Box>;
