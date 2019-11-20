import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import {
  ProductCategoriesScreenComponent,
  ProductCategoriesScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/screens/ProductCategoriesScreen/ProductCategoriesScreen.component';
import { getCategories } from '@mdziekon/igt-shopping/common/data/products/source.products.data';

type MappedPropNames = 'categories' | 'onCategoriesListItemPressed';

type MappedProps = Pick<ProductCategoriesScreenComponentProps, MappedPropNames>;
type OwnProps = NavigationInjectedProps;

type ContainerProps = OwnProps &
  Omit<ProductCategoriesScreenComponentProps, keyof MappedProps>;

export const ProductCategoriesScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const categories = getCategories();

  const onCategoriesListItemPressed = (categoryId: string) => {
    props.navigation.navigate('ProductsList', {
      categoryId,
    });
  };

  return (
    <ProductCategoriesScreenComponent
      categories={categories}
      onCategoriesListItemPressed={onCategoriesListItemPressed}
      {...props}
    />
  );
};
