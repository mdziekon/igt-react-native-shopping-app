import { applyMiddleware, compose, createStore, Middleware } from 'redux';

import { createRootReducer } from '@mdziekon/igt-shopping/common/rootState/root.reducer';

interface RequiredInitData {}

const createRootStore = (initData: RequiredInitData) => {
  const middlewares: Middleware[] = [];

  const rootReducer = createRootReducer(initData);

  const rootStore = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
  );

  return rootStore;
};

export { createRootStore };
