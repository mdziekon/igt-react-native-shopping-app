import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { createRootReducer } from '@mdziekon/igt-shopping/common/rootState/root.reducer';
import { rootSaga } from '@mdziekon/igt-shopping/common/rootState/root.saga';

interface RequiredInitData {}

const createRootStore = (initData: RequiredInitData) => {
  const middlewares: Middleware[] = [];

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  middlewares.push(
    createLogger({
      collapsed: true,
    }),
  );

  const rootReducer = createRootReducer(initData);

  const rootStore = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return rootStore;
};

export { createRootStore };
