import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import ActionButton, { ActionButtonProps } from './ActionButton';

export default {
  title: 'Components/Buttons',
  argTypes: {
    onClick: {
      name: 'Click Action',
      description: 'What will happen when the button is clicked',
    },
    isDisabled: {
      name: 'Disabled',
      description: 'Is the button disabled or not',
    },
    showSpinner: {
      name: 'Show Spinner',
      description: 'Determine if the spinner is to be displayed',
    },
    isSubmitting: {
      name: 'Is Submitting',
      description: 'Should indicate if the component is in a submitting state.',
    },
    variant: {
      name: 'Variant',
      description: 'The Type of button to be displayed',
      defaultValue: 'contained',
      options: ['text', 'outlined', 'contained'],
      control: { type: 'select' },
    },
    children: {
      name: 'Label',
      description: 'Text in the button.',
    },
  },
} as Meta;

const Template: Story<ActionButtonProps> = (args: ActionButtonProps) => {
  const { children, ...rest } = args;
  return (
    <ActionButton {...rest}>
      {children}
    </ActionButton>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  onClick: action('Default button clicked'),
  variant: 'contained',
  children: 'Man',
  isSubmitting: false,
  isDisabled: false,
  showSpinner: false,
};
