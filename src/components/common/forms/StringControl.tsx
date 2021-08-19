import { OutlinedInputProps, TextField } from '@material-ui/core';
import React, { SyntheticEvent } from 'react';
import { v4 as uuid } from 'uuid';

export interface ErrorBody {
  message?: string;
}

export interface StringControlProps {
  /**
   * Error object provided by react-form-hooks
   */
  errors?: Record<string, ErrorBody>;

  /**
   * The function that will register the control with react form hooks
   */
  register(propName: string);

  /**
   * The name the prop will be given aas part of the form. Ultimately used in react-form-hooks
   * @example userName
   */
  propName: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'date' | 'tel' | 'url';
  onChange(event: SyntheticEvent);
  InputProps?: Partial<OutlinedInputProps>;
  margin?: 'none' | 'dense' | 'normal';
  disabled?: boolean;
  variant?: 'filled' | 'standard' | 'outlined'
}

const StringControl: React.FC<StringControlProps> = ({
  errors,
  register,
  propName,
  label,
  placeholder,
  type = 'text',
  onChange,
  InputProps,
  margin = 'none',
  disabled = false,
  variant = 'outlined',
}) => (
  <TextField
    id={`${propName}-${uuid()}`}
    error={errors[propName] !== undefined}
    fullWidth
    helperText={errors[propName] !== undefined ? errors[propName].message : ''}
    label={label}
    InputLabelProps={{ shrink: true }}
    name={propName}
    disabled={disabled}
    placeholder={placeholder || label}
    variant={variant}
    margin={margin}
    type={type || 'text'}
    inputRef={register}
    autoComplete="off"
    InputProps={InputProps}
    onChange={onChange}
  />
);

export default StringControl;
