import React from 'react';
import { Container, Content, List } from 'native-base';

import { Order } from '@mdziekon/igt-shopping/common/models/order.models';
import { OrderItem } from '@mdziekon/igt-shopping/modules/Cart/screens/CartOrderReceiptScreen/OrderItem/OrderItem.component';
import { OrderSummaryItem } from '@mdziekon/igt-shopping/modules/Cart/screens/CartOrderReceiptScreen/OrderSummaryItem/OrderSummaryItem.component';
import { OrderSummaryHeader } from '@mdziekon/igt-shopping/modules/Cart/screens/CartOrderReceiptScreen/OrderSummaryHeader/OrderSummaryHeader.component';

type CartOrderReceiptScreenComponentOwnProps = {
  order: Order.Order;
};

export type CartOrderReceiptScreenComponentProps = CartOrderReceiptScreenComponentOwnProps;

export const CartOrderReceiptScreenComponent: React.FC<CartOrderReceiptScreenComponentProps> = (
  props,
) => {
  return (
    <Container>
      <Content padder>
        <OrderSummaryHeader order={props.order} />

        <List>
          {props.order.items.map((orderItem) => {
            return (
              <OrderItem key={orderItem.productId} orderItem={orderItem} />
            );
          })}

          <OrderSummaryItem key={'item-total'} order={props.order} />
        </List>
      </Content>
    </Container>
  );
};
