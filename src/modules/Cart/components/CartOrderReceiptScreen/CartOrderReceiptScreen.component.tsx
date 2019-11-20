import React from 'react';
import {
  Container,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
} from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';
import {
  getProductThumbnailUri,
  getProductDetails,
  getCategoryDetails,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { StyleSheet } from 'react-native';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';

type CartOrderReceiptScreenComponentOwnProps = {
  order: Order.Order;
};
type InjectedProps = NavigationInjectedProps;

export type CartOrderReceiptScreenComponentProps = CartOrderReceiptScreenComponentOwnProps &
  InjectedProps;

export const CartOrderReceiptScreenComponent: React.FC<CartOrderReceiptScreenComponentProps> = (
  props,
) => {
  const total = props.order.items.reduce((accumulator, orderItem) => {
    const subtotal = Number(orderItem.orderPrice) * orderItem.quantity;

    return accumulator + subtotal;
  }, 0);

  return (
    <Container>
      <Content padder>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Your Order #{props.order.orderId} is complete!</Text>
            </Body>
          </CardItem>
        </Card>

        <List>
          {props.order.items.map((orderItem) => {
            const { productId } = orderItem;
            const product = getProductDetails(productId);
            const category = getCategoryDetails(product.categoryId);
            const productThumbnailUri = getProductThumbnailUri(product);

            const subtotal = Number(orderItem.orderPrice) * orderItem.quantity;

            return (
              <ListItem thumbnail key={productId}>
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
                    Subtotal: ${subtotal}
                  </Text>
                </Right>
              </ListItem>
            );
          })}

          <ListItem thumbnail key={'item-total'}>
            <Body>
              <Text />
            </Body>
            <Right>
              <Text style={styles.totalListItem} note numberOfLines={1}>
                Total: ${total}
              </Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
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
  totalListItem: {
    fontWeight: 'bold',
  },
});
