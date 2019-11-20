import { all, select, takeLatest, putResolve } from 'redux-saga/effects';
import { StackActions } from 'react-navigation';

import {
  CartAction,
  CartActionTypes,
  cartActionCreators,
} from '@mdziekon/igt-shopping/common/modules/Cart/actions/cart.actions';
import { selectCartItems } from '@mdziekon/igt-shopping/common/modules/Cart/utils/selectors.utils';
import { generateOrder } from '@mdziekon/igt-shopping/common/modules/Cart/utils/helpers.utils';

function* submitCart(action: CartAction) {
  if (action.type !== CartActionTypes.SubmitCart) {
    return;
  }

  const cartItems: ReturnType<typeof selectCartItems> = yield select(
    selectCartItems,
  );

  const newOrder = generateOrder({ cartItems });

  const replaceAction = StackActions.replace({
    routeName: 'CartOrderReceipt',
    params: {
      orderId: newOrder.orderId,

      // TODO: This should be fetched in the appropriate place, but
      // since I don't want to store it in Redux atm, pass it as a param
      order: newOrder,
    },
  });

  yield action.payload.navigation.dispatch(replaceAction);

  yield putResolve(cartActionCreators.clearCart());
}

export function* watchCartActions() {
  yield all([takeLatest(CartActionTypes.SubmitCart, submitCart)]);
}
