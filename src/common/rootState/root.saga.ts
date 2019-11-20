import { all, call, fork } from 'redux-saga/effects';

import { watchCartActions } from '@mdziekon/igt-shopping/common/modules/Cart/sagas/cart.sagas';

const sagas = [watchCartActions];

export function* rootSaga() {
  yield all(
    sagas.map((saga) =>
      fork(function* sagaExecutor() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            console.error(error);
          }
        }
      }),
    ),
  );
}
