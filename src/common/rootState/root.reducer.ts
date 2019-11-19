import { Action, combineReducers } from 'redux';
import {
  CartState,
  createCartReducer,
} from '@mdziekon/igt-shopping/common/modules/Cart/reducers/cart.reducer';

interface RequiredInitData {}

export interface RootState {
  cart: CartState;
}

export const createRootReducer = (_initData: RequiredInitData) => {
  const appReducer = combineReducers<RootState>({
    cart: createCartReducer(),
  });

  const rootReducer = (state: RootState | undefined, action: Action) =>
    appReducer(state, action);

  return rootReducer;
};
