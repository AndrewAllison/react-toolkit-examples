import { Box, Card } from '@material-ui/core';
import { Meta } from '@storybook/react';
import React from 'react';
import PasswordControl from './PasswordControl';

export default {
  title: 'Components/Forms/Controls/Password',
  component: PasswordControl,
  argTypes: { onChange: { action: 'Changed' }, register: { action: 'Registered' } },
} as Meta;

const Template = (args) => {
  const { ...rest } = args;
  return (
    <Box sx={{ m: 4 }}>
      <Card
        sx={{ p: 2 }}
      >
        <PasswordControl
          {...rest}
        />
      </Card>
    </Box>
  );
}

export const Simple = Template.bind({});
Simple.args = {
  errors: {},
};

export const HasErrors = Template.bind({});
HasErrors.args = {
  errors: {
    password: {
      message: 'Please import a bit of text here.',
    },
  },
};
