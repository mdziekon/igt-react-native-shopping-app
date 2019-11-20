import React from 'react';
import {
  getProductDetails,
  getCategoryDetails,
  getProductThumbnailUri,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { ListItem, Left, Thumbnail, Text, Body, Right } from 'native-base';
import { StyleSheet } from 'react-native';
import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';

interface CartItemProps {
  cartItem: Cart.Item;
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { cartItem } = props;
  const { productId } = cartItem;

  const product = getProductDetails(productId);
  const category = getCategoryDetails(product.categoryId);
  const productThumbnailUri = getProductThumbnailUri(product);

  const subtotal = Number(product.price) * cartItem.quantity;

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
          Quantity: {cartItem.quantity}
        </Text>
      </Body>
      <Right>
        <Text note numberOfLines={1}>
          Subtotal: ${subtotal}
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
