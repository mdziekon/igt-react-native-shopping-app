import { all, select, takeLatest, putResolve } from 'redux-saga/effects';
import { StackActions } from 'react-navigation';

import {
  CartAction,
  CartActionTypes,
  cartActionCreators,
} from '@mdziekon/igt-shopping/common/modules/Cart/actions/cart.actions';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';
import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';
import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';
import { getProductDetails } from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';

const generateOrder = (params: { cartItems: Cart.Item[] }) => {
  const order: Order.Order = {
    orderId: String(Math.floor(Math.random() * 1000000)),
    items: params.cartItems.map(
      (cartItem): Order.OrderItem => {
        const product = getProductDetails(cartItem.productId);

        return {
          productId: cartItem.productId,
          quantity: cartItem.quantity,
          orderPrice: product.price,
        };
      },
    ),
  };

  return order;
};

const selectCartItems = (state: RootState) => state.cart.items;

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
