import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import {
  CartOrderReceiptScreenComponent,
  CartOrderReceiptScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Cart/screens/CartOrderReceiptScreen/CartOrderReceiptScreen.component';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';

type MappedPropNames = 'order';

type MappedProps = Pick<CartOrderReceiptScreenComponentProps, MappedPropNames>;

type ContainerProps = Omit<
  CartOrderReceiptScreenComponentProps,
  keyof MappedProps
>;

export const CartOrderReceiptScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const navigation = useNavigation();

  // TODO: order object should be fetched from... somewhere
  // const orderId: string = props.navigation.getParam('orderId');
  const order: Order.Order = navigation.getParam('order');

  return <CartOrderReceiptScreenComponent order={order} {...props} />;
};
