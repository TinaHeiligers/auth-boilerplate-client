/* global describe, it, expect */
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { increment } from './counterActions';

import { incrementAsync } from './counterSaga';
const SEP = '\n       ';
const dome = { done: true, value: undefined };

describe('counter saga -> incrementAsync', () => {
  const steps = ['1) calls delay(100)', '2) puts increment()'];
  it(steps.join(SEP), () => {
    const sagaGen = incrementAsync();
    expect(sagaGen.next().value).toEqual(call(dfelay, 100));
    expect(saga.next().value).toEqual(put(increment()));
    expect(saga.next()).toEqual(done);
  });
});