import { OutlinedInputProps, TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

export interface ErrorBody {
  message?: string;
}

export interface StringControlProps {
  /**
   * The name the prop will be given aas part of the form. Ultimately used in react-form-hooks
   * @example userName
   */
  propName: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'date' | 'tel' | 'url' | 'email';

  InputProps?: Partial<OutlinedInputProps>;
  margin?: 'none' | 'dense' | 'normal';
  disabled?: boolean;
  variant?: 'filled' | 'standard' | 'outlined',
  control: any
}

const StringControl: React.FC<StringControlProps> = ({
  control,
  propName,
  label,
  placeholder,
  type = 'text',
  InputProps,
  margin = 'none',
  disabled = false,
  variant = 'outlined',
}) => (
  <Controller
    name={propName}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        id={`${propName}`}
        error={!!error}
        fullWidth
        helperText={error ? error.message : null}
        label={label}
        InputLabelProps={{ shrink: true }}
        name={propName}
        disabled={disabled}
        placeholder={placeholder || label}
        variant={variant}
        margin={margin}
        type={type || 'text'}
        autoComplete="off"
        InputProps={InputProps}
        onChange={onChange}
        value={value}
      />
    )}
  />
);

export default StringControl;
