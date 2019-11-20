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
import { CategoryListItem } from '@mdziekon/igt-shopping/modules/Products/screens/ProductCategoriesScreen/CategoryListItem/CategoryListItem.component';

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
              <CategoryListItem
                key={category.categoryId}
                category={category}
                onCategoriesListItemPressed={props.onCategoriesListItemPressed}
              />
            );
          })}
        </List>
      </Content>

      <Footer />
    </Container>
  );
};
