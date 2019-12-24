import { put, takeLatest, all, takeEvery } from 'redux-saga/effects';

function* newIndex(index) {
  yield put({ type: "NEW_INDEX", index: index.index });
}

function* getPageValuesActionWatcher() {
  yield takeLatest('GET_VALS', newIndex);
}

export default getPageValuesActionWatcher;