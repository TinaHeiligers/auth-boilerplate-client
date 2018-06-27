import { all } from 'redux-saga/effects';
import counterSagas from './counter/counterSaga';

export default function* rootSaga(getState) {
  yield all([
    counterSagas(),
  ]);
};