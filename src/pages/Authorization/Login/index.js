import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, withStyles, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import styles from './styles';
import renderTextField from '../../../components/RenderInput';

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrap}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Log In
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <Field
              name="email"
              label="E-mail"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              component={renderTextField}
            />
          </form>
          <div className={classes.dontHaveAccount}>
            <Typography className={classes.account} component="p">
              Don't have account yet?
            </Typography>
            {'  '}
            <Link className={classes.registerLink} to="/registration">
              Register
            </Link>
          </div>
          <Button
            variant="contained"
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

const LoginFormGroup = reduxForm({
  form: 'LoginForm',
})(Login);

export default withStyles(styles)(LoginFormGroup);
