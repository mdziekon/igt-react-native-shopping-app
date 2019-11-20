import React from 'react';

import { Products } from '@mdziekon/igt-shopping/common/models/products.models';
import { ListItem, Left, Text, Right, Icon } from 'native-base';

interface CategoryListItemProps {
  category: Products.Category;

  onCategoriesListItemPressed: (categoryId: string) => void;
}

export const CategoryListItem: React.FC<CategoryListItemProps> = (props) => {
  const { category } = props;

  return (
    <ListItem
      onPress={() => props.onCategoriesListItemPressed(category.categoryId)}
    >
      <Left>
        <Text>{category.title}</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );
};
