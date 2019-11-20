import React from 'react';
import { ListItem, Body, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';

interface OrderSummaryItemProps {
  order: Order.Order;
}

export const OrderSummaryItem: React.FC<OrderSummaryItemProps> = (props) => {
  const {
    order: { items: orderItems },
  } = props;

  const total = orderItems.reduce((accumulator, orderItem) => {
    const subtotal = Number(orderItem.orderPrice) * orderItem.quantity;

    return accumulator + subtotal;
  }, 0);

  return (
    <ListItem thumbnail>
      <Body>
        <Text />
      </Body>
      <Right>
        <Text style={styles.totalListItem} note numberOfLines={1}>
          Total: ${total}
        </Text>
      </Right>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  totalListItem: {
    fontWeight: 'bold',
  },
});
