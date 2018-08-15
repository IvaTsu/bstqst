import { all } from 'redux-saga/effects';
import { AuthSaga } from '../pages/Authorization/Login/sagas';

export default function* rootSaga() {
  yield all([AuthSaga()]);
}
