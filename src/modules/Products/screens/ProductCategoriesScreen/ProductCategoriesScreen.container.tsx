import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import {
  ProductCategoriesScreenComponent,
  ProductCategoriesScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/screens/ProductCategoriesScreen/ProductCategoriesScreen.component';
import { getCategories } from '@mdziekon/igt-shopping/common/data/products/source.products.data';

type MappedPropNames = 'categories' | 'onCategoriesListItemPressed';

type MappedProps = Pick<ProductCategoriesScreenComponentProps, MappedPropNames>;

type ContainerProps = Omit<
  ProductCategoriesScreenComponentProps,
  keyof MappedProps
>;

export const ProductCategoriesScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const navigation = useNavigation();

  const onCategoriesListItemPressed = (categoryId: string) => {
    navigation.navigate('ProductsList', {
      categoryId,
    });
  };

  const categories = getCategories();

  return (
    <ProductCategoriesScreenComponent
      categories={categories}
      onCategoriesListItemPressed={onCategoriesListItemPressed}
      {...props}
    />
  );
};
