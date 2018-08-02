export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDurection: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  registerLink: {
    color: 'blue',
    fontSize: '16',
    marginLeft: 15,
  },
  button: {
    margin: theme.spacing.unit,
    width: '100%',
    marginTop: 30,
  },
  input: {
    display: 'none',
  },
  account: {
    marginLeft: 6,
  },
  dontHaveAccount: {
    display: 'flex',
    marginTop: 10,
  },
});
