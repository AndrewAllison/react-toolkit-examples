import { Button, CircularProgress } from '@material-ui/core';
import React from 'react';

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
  children: any;
  /**
   * Function for clicking
   */
  onClick: any;
  /**
   * The type of button to be used
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
                                                     variant = 'contained',
                                                     showSpinner = false,
                                                     isSubmitting = false,
                                                   }) => {
  return <Button disabled={isDisabled || isSubmitting} onClick={onClick} variant={variant}>
    {(showSpinner || isSubmitting) &&
    <CircularProgress size={12} color={(isDisabled || isSubmitting) ? 'primary' : 'secondary'}/>}
    {children}
  </Button>;
};

export default ActionButton;
