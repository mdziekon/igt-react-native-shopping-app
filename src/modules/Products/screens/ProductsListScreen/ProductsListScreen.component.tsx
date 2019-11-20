import React from 'react';
import {
  Container,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  List,
} from 'native-base';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';
import { Footer } from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer';
import { ProductListItem } from '@mdziekon/igt-shopping/modules/Products/screens/ProductsListScreen/ProductListItem/ProductListItem.component';

type ProductsListScreenComponentOwnProps = {
  category: Products.Category;
  products: Products.Product[];

  onProductsListItemPressed: (productId: string) => void;
};

export type ProductsListScreenComponentProps = ProductsListScreenComponentOwnProps;

export const ProductsListScreenComponent: React.FC<ProductsListScreenComponentProps> = (
  props,
) => {
  return (
    <Container>
      <Content padder>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Check out our amazing products below</Text>
            </Body>
          </CardItem>
        </Card>

        <List>
          {props.products.map((product) => {
            return (
              <ProductListItem
                key={product.productId}
                product={product}
                onProductsListItemPressed={props.onProductsListItemPressed}
              />
            );
          })}
        </List>
      </Content>

      <Footer />
    </Container>
  );
};
