import { all, fork } from "@redux-saga/core/effects";

import actionWatcher from './demo/saga';
import getPageValuesActionWatcher from './get-page-values/saga';


export function* rootSaga() {
  yield all([
    actionWatcher(),
    getPageValuesActionWatcher()
  ]);
}