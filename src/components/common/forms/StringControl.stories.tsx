import React from 'react';
import { Box, Card } from '@material-ui/core';
import { Meta } from '@storybook/react';
import { StringControl } from './index';

export default {
  title: 'Components/Forms/Controls/String',
  component: StringControl,
  argTypes: { onChange: { action: 'Changed' }, register: { action: 'Registered' } },
} as Meta;

const Template = (args) => {
  const { ...rest } = args;
  return (
    <Box sx={{ m: 4 }}>
      <Card
        sx={{ p: 2 }}
      >
        <StringControl
          {...rest}
        />
      </Card>
    </Box>
  );
}

export const Simple = Template.bind({});
Simple.args = {
  propName: 'Q1',
  label: 'Show Me the Label',
  placeholder: 'Enter some Text here...',
  themeChoice: 'light',
  errors: {},
};

export const HasErrors = Template.bind({});
HasErrors.args = {
  propName: 'Q1',
  label: 'Show Me the Label',
  placeholder: 'Enter some Text here...',
  themeChoice: 'light',
  errors: {
    Q1: {
      message: 'Please import a bit of text here.',
    },
  },
};
