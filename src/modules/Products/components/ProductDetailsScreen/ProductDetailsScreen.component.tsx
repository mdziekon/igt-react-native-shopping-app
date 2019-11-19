import React from 'react';
import {
  Container,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Button,
  Icon,
} from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';
import { StyleSheet } from 'react-native';
import { Footer } from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer';

type ProductDetailsScreenComponentOwnProps = {
  category: Products.Category;
  product: Products.Product;
  onAddToCartPressed: () => void;
};
type InjectedProps = NavigationInjectedProps;

export type ProductDetailsScreenComponentProps = ProductDetailsScreenComponentOwnProps &
  InjectedProps;

export const ProductDetailsScreenComponent: React.FC<ProductDetailsScreenComponentProps> = (
  props,
) => {
  return (
    <Container>
      <Content padder>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Product overview</Text>
            </Body>
          </CardItem>
        </Card>

        <Text>{props.product.title}</Text>
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

      <Footer navigation={props.navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  ctaButton: {
    marginTop: 10,
  },
});
