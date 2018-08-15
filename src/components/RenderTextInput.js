import React from 'react';
import TextField from '@material-ui/core/TextField';
import { asyncValidate } from '../middleware/validation';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField label={label} error={touched && error} {...input} {...custom} />
);

export default renderTextField;
