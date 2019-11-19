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
  Icon,
} from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';
import { getProductThumbnailUri } from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { Footer } from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer';

type ProductsListScreenComponentOwnProps = {
  category: Products.Category;
  products: Products.Product[];
};
type InjectedProps = NavigationInjectedProps;

export type ProductsListScreenComponentProps = ProductsListScreenComponentOwnProps &
  InjectedProps;

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
            const productThumbnailUri = getProductThumbnailUri(product);

            return (
              <ListItem
                thumbnail
                key={product.productId}
                onPress={() =>
                  props.navigation.navigate('ProductDetails', {
                    productId: product.productId,
                  })
                }
              >
                <Left>
                  <Thumbnail square source={{ uri: productThumbnailUri }} />
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
          })}
        </List>
      </Content>

      <Footer navigation={props.navigation} />
    </Container>
  );
};
