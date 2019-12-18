import { put, takeLatest, all, takeEvery } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json());
  
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

function* newMode(status) {
  //yield fetchNews();
  console.log('====================================');
  console.log(status);
  console.log('====================================');
  yield put({ type: "NEW_MODE", newMode: status });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
  yield takeLatest('CHANGE_MODE', newMode);
}

export default actionWatcher;