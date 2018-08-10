export const validate = values => {
  const errors = {};
  // if (!values.username) {
  //   errors.username = 'Required'
  // } else if (values.username.length > 15) {
  //   errors.username = 'Must be 15 characters or less'
  // }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' };
    }
  });
};
