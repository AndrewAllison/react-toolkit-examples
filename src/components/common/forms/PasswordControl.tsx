import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Controller } from 'react-hook-form';
import { ErrorBody } from './StringControl';

/**
 * Component for password inputs
 * @param errors Error object unusually provided by react-form-hooks
 * @param register register object for inputRef by Form Hooks
 * @param onChange a functino that will be called when the text changes.
 * @param id the id of the control defaults to 'passwprd'
 * @param label
 * @param name
 * @param placeholder
 * @constructor
 */
const PasswordControl: React.FC<PasswordControlProps> = ({
  control,
  id = 'password',
  label = 'Password',
  name = 'password',
  placeholder = 'Please enter a password.',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          id={id}
          error={!!error}
          fullWidth
          helperText={error ? error.message : null}
          label={label}
          InputLabelProps={{ shrink: true }}
          name={name}
          margin="normal"
          placeholder={placeholder}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          autoComplete="off"
          onChange={onChange}
          value={value}
          InputProps={{
            endAdornment:
  <InputAdornment position="end">
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
      edge="end"
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>,
          }}
        />
      )}
    />
  );
};

export interface PasswordControlProps {
  /**
   * Error object provided by react-form-hooks
   */
  errors?: Record<string, ErrorBody>;
  control: any;
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
}

export default PasswordControl;
