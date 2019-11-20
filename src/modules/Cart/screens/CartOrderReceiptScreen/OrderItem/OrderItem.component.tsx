import React from 'react';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';
import {
  getProductDetails,
  getCategoryDetails,
  getProductThumbnailUri,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { ListItem, Left, Thumbnail, Text, Body, Right } from 'native-base';
import { StyleSheet } from 'react-native';
import {
  priceStringToNumber,
  displayPrice,
} from '@mdziekon/igt-shopping/common/utils/prices.utils';

interface OrderItemProps {
  orderItem: Order.OrderItem;
}

export const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { orderItem } = props;
  const { productId } = orderItem;

  const product = getProductDetails(productId);
  const category = getCategoryDetails(product.categoryId);
  const productThumbnailUri = getProductThumbnailUri(product);

  const subtotal =
    priceStringToNumber(orderItem.orderPrice) * orderItem.quantity;

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          style={styles.cartItemThumbnail}
          source={{ uri: productThumbnailUri }}
        />
      </Left>
      <Body>
        <Text>{product.title}</Text>
        <Text note numberOfLines={1} style={styles.cartItemCategory}>
          {category.title}
        </Text>
        <Text note numberOfLines={1}>
          Quantity: {orderItem.quantity}
        </Text>
      </Body>
      <Right>
        <Text note numberOfLines={1}>
          Subtotal: {displayPrice(subtotal)}
        </Text>
      </Right>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  cartItemCategory: {
    fontSize: 10,
    marginBottom: 6,
  },
  cartItemThumbnail: {
    width: 48,
    height: 48,
  },
});
