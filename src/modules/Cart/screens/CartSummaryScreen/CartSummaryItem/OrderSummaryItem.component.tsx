import React from 'react';
import { ListItem, Body, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';
import { getProductDetails } from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import {
  priceStringToNumber,
  displayPrice,
} from '@mdziekon/igt-shopping/common/utils/prices.utils';

interface CartSummaryItemProps {
  cartItems: Cart.Item[];
}

export const CartSummaryItem: React.FC<CartSummaryItemProps> = (props) => {
  const { cartItems } = props;

  const total = cartItems.reduce((accumulator, cartItem) => {
    const productDetails = getProductDetails(cartItem.productId);
    const subtotal =
      priceStringToNumber(productDetails.price) * cartItem.quantity;

    return accumulator + subtotal;
  }, 0);

  return (
    <ListItem thumbnail>
      <Body>
        <Text />
      </Body>
      <Right>
        <Text style={styles.totalListItem} note numberOfLines={1}>
          Total: {displayPrice(total)}
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
