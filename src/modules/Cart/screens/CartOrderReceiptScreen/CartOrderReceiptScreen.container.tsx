import React from 'react';

import {
  CartOrderReceiptScreenComponent,
  CartOrderReceiptScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Cart/screens/CartOrderReceiptScreen/CartOrderReceiptScreen.component';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';
import { NavigationInjectedProps } from 'react-navigation';

type MappedPropNames = 'order';

type MappedProps = Pick<CartOrderReceiptScreenComponentProps, MappedPropNames>;
type OwnProps = NavigationInjectedProps;

type ContainerProps = OwnProps &
  Omit<CartOrderReceiptScreenComponentProps, keyof MappedProps>;

export const CartOrderReceiptScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  // TODO: order object should be fetched from... somewhere
  // const orderId: string = props.navigation.getParam('orderId');
  const order: Order.Order = props.navigation.getParam('order');

  return <CartOrderReceiptScreenComponent order={order} {...props} />;
};
