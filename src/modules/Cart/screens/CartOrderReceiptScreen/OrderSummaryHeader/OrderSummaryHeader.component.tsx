import React from 'react';
import { Text, Card, CardItem, Body } from 'native-base';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';

interface OrderSummaryHeaderProps {
  order: Order.Order;
}

export const OrderSummaryHeader: React.FC<OrderSummaryHeaderProps> = (
  props,
) => {
  return (
    <Card transparent>
      <CardItem>
        <Body>
          <Text>Your Order #{props.order.orderId} is complete!</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
