import React from 'react';

import {
  ProductCategoriesScreenComponent,
  ProductCategoriesScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/components/ProductCategoriesScreen/ProductCategoriesScreen.component';
import { getCategories } from '@mdziekon/igt-shopping/common/data/products/source.products.data';

type MappedPropNames = 'categories';

type MappedProps = Pick<ProductCategoriesScreenComponentProps, MappedPropNames>;
type OwnProps = Omit<ProductCategoriesScreenComponentProps, keyof MappedProps>;

export const ProductCategoriesScreenContainer: React.FC<OwnProps> = (props) => {
  const categories = getCategories();

  return (
    <ProductCategoriesScreenComponent categories={categories} {...props} />
  );
};
