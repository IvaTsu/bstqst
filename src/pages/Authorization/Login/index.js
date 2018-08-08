import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, withStyles, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';

import { loginUser } from './actions';
import renderTextField from '../../../components/RenderInput';

class Login extends Component {
  onSubmit = values => {
    // const { appVersion, cookieEnabled, platform } = window.navigator;
    const { dispatch } = this.props;
    const data = {
      deviceToken:
        'ef1def55d8ae07c7990ca694a818a5bccddfbec8f50ea06a063d712be3978a016289f491d1a43ef9c30fc82f773a7a33',
      ...values,
    };
    dispatch(loginUser(data));
  };
  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <div className={classes.wrap}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Log In
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <Field
              name="username"
              label="E-mail"
              className={classes.textField}
              margin="normal"
              component={renderTextField}
            />
            <Field
              name="password"
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

const LoginFormGroup = reduxForm({
  form: 'LoginForm',
})(Login);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { loginUser }
  )
)(LoginFormGroup);

// TODO make it works with saga

// componentWillMount = () => {

//   axios
//     .post('http://api.bestguestapp.com/user/signIn', {
//       data: JSON.stringify(data),
//     })
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// };
