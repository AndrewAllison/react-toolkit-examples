import React, { SyntheticEvent, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
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
  errors,
  register,
  onChange,
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

  const password = errors[name];
  return (
    <TextField
      id={id}
      error={password !== undefined}
      fullWidth
      helperText={password !== undefined ? password.message : ''}
      label={label}
      InputLabelProps={{ shrink: true }}
      name={name}
      margin="normal"
      placeholder={placeholder}
      variant="outlined"
      inputRef={register}
      type={showPassword ? 'text' : 'password'}
      autoComplete="off"
      onChange={onChange}
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
  );
};

export interface PasswordControlProps {
  /**
   * Error object provided by react-form-hooks
   */
  errors?: Record<string, ErrorBody>;

  /**
   * The function that will register the control with react form hooks
   */
  register(propName: string);

  /**
   * The Event that fires when the text has changed
   * @param event {SyntheticEvent} Details about the event
   */
  onChange(event: SyntheticEvent);
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
}

export default PasswordControl;
