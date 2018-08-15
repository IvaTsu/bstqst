import { LOGIN } from './types';

export const loginUser = data => {
  return {
    type: LOGIN,
    payload: data,
  };
};
