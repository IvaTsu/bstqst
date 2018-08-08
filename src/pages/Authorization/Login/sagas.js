import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUserRequest } from './api';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCEDED } from './types';

function* loginUserSagas(action) {
  const userData = action.payload;
  const response = yield call(loginUserRequest, userData);
  try {
    yield put({ type: LOGIN_SUCCEDED, user: response });
  } catch (error) {
    yield put({ type: LOGIN_FAILED, message: response });
  }
}

export function* AuthSaga() {
  yield takeEvery(LOGIN, loginUserSagas);
}
