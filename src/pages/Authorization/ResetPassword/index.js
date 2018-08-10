import React, { Component } from 'react';
import { Typography, Paper, withStyles, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import styles from './styles';
import { validate, asyncValidate } from '../../../middleware/validation';
import renderTextField from '../../../components/RenderTextInput';
import { resetPassword } from './actions';

class ResetPassword extends Component {
  onSubmit = values => {
    const { dispatch, reset } = this.props;
    dispatch(resetPassword(values));
    reset();
    console.log(values);
  };
  render() {
    const { classes, handleSubmit, pristine, submitting } = this.props;
    return (
      <div className={classes.wrap}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Password Recovery
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <Field
              name="email"
              label="E-mail"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Button
              onClick={handleSubmit(this.onSubmit)}
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
              disabled={pristine || submitting}
            >
              Recover password
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state,
  };
};

const ResetPasswordFormGroup = reduxForm({
  form: 'RecoveryPassword',
  validate,
  asyncValidate,
})(ResetPassword);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { resetPassword }
  )
)(ResetPasswordFormGroup);
