import actionWatcher from './demo/saga';
import { all, fork } from "@redux-saga/core/effects";

export function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}