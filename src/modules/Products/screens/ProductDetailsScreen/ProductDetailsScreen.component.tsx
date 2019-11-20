import React from 'react';
import { Container, Content, Text, Button, Icon } from 'native-base';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';
import { StyleSheet } from 'react-native';
import { Footer } from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer';
import { getProductThumbnailUri } from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { AutosizedRemoteThumbnail } from '@mdziekon/igt-shopping/common/components/AutosizedRemoteThumbnail/AutosizedRemoteThumbnail.component';

type ProductDetailsScreenComponentOwnProps = {
  category: Products.Category;
  product: Products.Product;
  onAddToCartPressed: () => void;
};

export type ProductDetailsScreenComponentProps = ProductDetailsScreenComponentOwnProps;

export const ProductDetailsScreenComponent: React.FC<ProductDetailsScreenComponentProps> = (
  props,
) => {
  const productThumbnailUri = getProductThumbnailUri(props.product);

  return (
    <Container>
      <Content padder>
        <AutosizedRemoteThumbnail source={{ uri: productThumbnailUri }} />

        <Text style={styles.productTitle}>{props.product.title}</Text>
        <Text>Category: {props.category.title}</Text>

        <Button
          iconLeft
          block
          primary
          bordered
          style={styles.ctaButton}
          onPress={props.onAddToCartPressed}
        >
          <Icon type="Ionicons" name="add" />
          <Text>Add to Cart (${props.product.price})</Text>
        </Button>
      </Content>

      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  productTitle: {
    fontWeight: 'bold',
  },
  ctaButton: {
    marginTop: 50,
  },
});
