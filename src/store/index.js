import rootReducers from "./reducers";
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "./sagas";

export default () => {

  const logger = createLogger();

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga)

  return store;
}