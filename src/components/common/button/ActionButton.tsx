import { Button, CircularProgress } from '@material-ui/core';
import React, { MouseEventHandler, ReactChild, ReactChildren } from 'react';

export interface ActionButtonProps {
  /**
   * Checks if the button should be disabled
   */
  isDisabled: boolean;
  /**
   * Determines if the component is submitting. Results in disabled and spinner
   */
  isSubmitting: boolean;
  /**
   * Children to be displayed in the button
   */
  children: string | ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  /**
   * Function for clicking
   */
  onClick: MouseEventHandler<any> | undefined;
  /**
   * The type of button to be used
   * one of 'outlined' | 'text' | 'contained'
   */
  variant: 'outlined' | 'text' | 'contained';
  /**
   * Determines if the spinner is to be shown or not.
   * @type {boolean}
   */
  showSpinner: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  isDisabled = false,
  onClick, children,
  variant,
  showSpinner = false,
  isSubmitting = false,
}) => (
  <Button disabled={isDisabled || isSubmitting} onClick={onClick} variant={variant}>
    {(showSpinner || isSubmitting)
      && (
        <CircularProgress
          aria-describedby="isSubmitting"
          size={12}
          color={(isDisabled || isSubmitting) ? 'primary' : 'secondary'}
        />
      )}
    {children}
  </Button>
);

export default ActionButton;
