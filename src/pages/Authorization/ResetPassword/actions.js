import { RESET_PASSWORD } from './types';

export const resetPassword = email => ({
  type: RESET_PASSWORD,
  payload: email,
});
