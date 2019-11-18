import React from 'react';

import {
  ProductsListScreenComponent,
  ProductsListScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/components/ProductsListScreen/ProductsListScreen.component';
import {
  getCategoryDetails,
  getProductsInCategory,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';

type MappedPropNames = 'category' | 'products';

type MappedProps = Pick<ProductsListScreenComponentProps, MappedPropNames>;
type OwnProps = {};

type ContainerProps = OwnProps &
  Omit<ProductsListScreenComponentProps, keyof MappedProps>;

export const ProductsListScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const categoryId = props.navigation.getParam('categoryId');

  const category = getCategoryDetails(categoryId);
  const products = getProductsInCategory(categoryId);

  return (
    <ProductsListScreenComponent
      category={category}
      products={products}
      {...props}
    />
  );
};
