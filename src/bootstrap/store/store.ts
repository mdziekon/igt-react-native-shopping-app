import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';

import { createRootReducer } from '@mdziekon/igt-shopping/common/rootState/root.reducer';

interface RequiredInitData {}

const createRootStore = (initData: RequiredInitData) => {
  const middlewares: Middleware[] = [];

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

  return rootStore;
};

export { createRootStore };
