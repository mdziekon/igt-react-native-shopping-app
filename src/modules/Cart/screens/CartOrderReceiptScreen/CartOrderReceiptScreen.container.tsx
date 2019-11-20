import React from 'react';

import {
  CartOrderReceiptScreenComponent,
  CartOrderReceiptScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Cart/screens/CartOrderReceiptScreen/CartOrderReceiptScreen.component';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';

type MappedPropNames = 'order';

type MappedProps = Pick<CartOrderReceiptScreenComponentProps, MappedPropNames>;
type OwnProps = {};

type ContainerProps = OwnProps &
  Omit<CartOrderReceiptScreenComponentProps, keyof MappedProps>;

export const CartOrderReceiptScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  // TODO: replace with actual order data fetching
  // const orderId: string = props.navigation.getParam('orderId');

  const order: Order.Order = {
    orderId: String(Math.random() * 1000000),
    items: [
      {
        productId: '1',
        quantity: 5,
        orderPrice: '2.00',
      },
      {
        productId: '3',
        quantity: 2,
        orderPrice: '20.00',
      },
      {
        productId: '2',
        quantity: 7,
        orderPrice: '5.00',
      },
      {
        productId: '5',
        quantity: 1,
        orderPrice: '15.00',
      },
    ],
  };

  return <CartOrderReceiptScreenComponent order={order} {...props} />;
};
