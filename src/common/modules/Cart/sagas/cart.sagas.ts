import { all, takeLatest, putResolve } from 'redux-saga/effects';
import { StackActions } from 'react-navigation';

import {
  CartAction,
  CartActionTypes,
  cartActionCreators,
} from '@mdziekon/igt-shopping/common/modules/Cart/actions/cart.actions';

function* submitCart(action: CartAction) {
  if (action.type !== CartActionTypes.SubmitCart) {
    return;
  }

  const orderId = 'abc123xyz';

  const replaceAction = StackActions.replace({
    routeName: 'CartOrderReceipt',
    params: {
      orderId,
    },
  });

  yield action.payload.navigation.dispatch(replaceAction);

  yield putResolve(cartActionCreators.clearCart());
}

export function* watchCartActions() {
  yield all([takeLatest(CartActionTypes.SubmitCart, submitCart)]);
}
