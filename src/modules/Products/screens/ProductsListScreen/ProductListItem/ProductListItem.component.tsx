import React from 'react';

import { getProductThumbnailUri } from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';
import {
  ListItem,
  Left,
  Thumbnail,
  Text,
  Body,
  Right,
  Icon,
} from 'native-base';
import { StyleSheet } from 'react-native';

interface ProductListItemProps {
  product: Products.Product;

  onProductsListItemPressed: (productId: string) => void;
}

export const ProductListItem: React.FC<ProductListItemProps> = (props) => {
  const { product } = props;

  const productThumbnailUri = getProductThumbnailUri(product);

  return (
    <ListItem
      thumbnail
      onPress={() => props.onProductsListItemPressed(product.productId)}
    >
      <Left>
        <Thumbnail
          square
          style={styles.productThumbnail}
          source={{ uri: productThumbnailUri }}
        />
      </Left>
      <Body>
        <Text>{product.title}</Text>
        <Text note numberOfLines={1}>
          Price: ${product.price}
        </Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  productThumbnail: {
    width: 48,
    height: 48,
  },
});
