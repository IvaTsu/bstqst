import React from 'react';
import { Link } from 'react-router-dom';
import {
  TextField,
  Typography,
  Paper,
  withStyles,
  Button,
} from '@material-ui/core';
import styles from './styles';

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrap}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Log In
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="e-mail"
              label="E-mail"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </form>
          <div className={classes.dontHaveAccount}>
            <Typography className={classes.account} component="p">
              Don't have account yet?
            </Typography>
            {'  '}
            <Link className={classes.registerLink} to="/">
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

export default withStyles(styles)(Login);
