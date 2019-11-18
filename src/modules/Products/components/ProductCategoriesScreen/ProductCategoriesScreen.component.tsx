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
} from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';

type ProductCategoriesScreenComponentOwnProps = {
  categories: Products.Category[];
};
type InjectedProps = NavigationInjectedProps;

export type ProductCategoriesScreenComponentProps = ProductCategoriesScreenComponentOwnProps &
  InjectedProps;

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
              <ListItem key={category.categoryId}>
                <Text>{category.title}</Text>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};
