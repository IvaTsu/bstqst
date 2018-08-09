import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, withStyles, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import renderTextField from '../../../components/RenderInput';

class Reginstration extends Component {
  onSubmit = values => {};
  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <div className={classes.wrap}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Registration
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <Field
              name="username"
              label="First Name"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="password"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="password"
              label="Login Name"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
          </form>
          <div className={classes.dontHaveAccount}>
            <Typography className={classes.account} component="p">
              Back to
            </Typography>
            <Link className={classes.registerLink} to="/login">
              Login
            </Link>
          </div>
          <Button
            onClick={handleSubmit(this.onSubmit)}
            variant="contained"
            type="submit"
            color="primary"
            className={classes.button}
          >
            Log In
          </Button>
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

const RegistrationFormGroup = reduxForm({
  form: 'RegistrationForm',
})(Reginstration);

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(RegistrationFormGroup);
