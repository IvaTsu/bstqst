import { all } from 'redux-saga/effects';

function* testSaga() {
  console.log('saga works fine');
}

export default function* rootSaga() {
  yield all([testSaga()]);
}
