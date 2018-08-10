import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, withStyles, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import renderTextField from '../../../components/RenderTextInput';
import renderCheckBox from '../../../components/RenderCheckBox';

class Reginstration extends Component {
  onSubmit = values => {};
  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <div className={classes.wrap}>
        <form className={classes.container} noValidate autoComplete="off">
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              Registration
            </Typography>
            <Field
              name="email"
              label="E-mail"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="firstName"
              label="First Name"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="Last Name"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="password"
              label="Password"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="showPassword"
              component={renderCheckBox}
              label="Show password"
            />
            <Field
              name="gdpr"
              component={renderCheckBox}
              label="I kindly confirm that I agree with something, something and especially something related to GDPR regulation."
            />
            <Button
              onClick={handleSubmit(this.onSubmit)}
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
            >
              Create account
            </Button>
            <div className={classes.dontHaveAccount}>
              <Link className={classes.registerLink} to="/login">
                Already have account? Log in.
              </Link>
            </div>
          </Paper>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state,
  };
};

const RegistrationFormGroup = reduxForm({
  form: 'RegistrationForm',
})(Reginstration);

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(RegistrationFormGroup);
