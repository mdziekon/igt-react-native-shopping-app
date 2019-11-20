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
  Icon,
  Right,
  Left,
} from 'native-base';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';
import { Footer } from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer';

type ProductCategoriesScreenComponentOwnProps = {
  categories: Products.Category[];

  onCategoriesListItemPressed: (categoryId: string) => void;
};

export type ProductCategoriesScreenComponentProps = ProductCategoriesScreenComponentOwnProps;

export const ProductCategoriesScreenComponent: React.FC<ProductCategoriesScreenComponentProps> = (
  props,
) => {
  return (
    <Container>
      <Content padder>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Select a category</Text>
            </Body>
          </CardItem>
        </Card>

        <List>
          {props.categories.map((category) => {
            return (
              <ListItem
                key={category.categoryId}
                onPress={() =>
                  props.onCategoriesListItemPressed(category.categoryId)
                }
              >
                <Left>
                  <Text>{category.title}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            );
          })}
        </List>
      </Content>

      <Footer />
    </Container>
  );
};
