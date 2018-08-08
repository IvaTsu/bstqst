import axios from 'axios';
import { BASE_URL } from '../../../configs/api';

export const loginUserRequest = data => {
  const result = axios
    .post(`${BASE_URL}/user/signIn`, JSON.stringify({ data }))
    .then(result => console.log(result))
    .catch(result => console.log(result));
  return result;
};
