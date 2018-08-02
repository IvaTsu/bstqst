import React from 'react';
import { TextField } from '@material-ui/core';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom,
  ...props
}) => (
  <TextField
    {...input}
    {...custom}
  />
);

export default renderTextField;
