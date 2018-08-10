import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const renderCheckBox = ({ input, label }) => (
  <FormControlLabel
    control={<Checkbox label={label} color="primary" />}
    label={label}
  />
);

export default renderCheckBox;
