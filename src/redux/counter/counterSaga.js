import { delay } from 'redux-saga';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { INCREMENT_REQUESTED, increment } from './counterActions';

function* incrementAsyncWatcher () {
  yield takeLatest([INCREMENT_REQUESTED], incrementAsync);
}
export function* incrementAsync (action) {
  yield call(delay, 100);
  yield put(increment());
}
export default function* counterSagas() {
  yield all([
    fork(incrementAsyncWatcher),
  ]);
}