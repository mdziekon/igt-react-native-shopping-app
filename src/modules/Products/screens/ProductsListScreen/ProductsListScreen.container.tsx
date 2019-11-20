import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import {
  ProductsListScreenComponent,
  ProductsListScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/screens/ProductsListScreen/ProductsListScreen.component';
import {
  getCategoryDetails,
  getProductsInCategory,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';

type MappedPropNames = 'category' | 'products' | 'onProductsListItemPressed';

type MappedProps = Pick<ProductsListScreenComponentProps, MappedPropNames>;
type OwnProps = NavigationInjectedProps;

type ContainerProps = OwnProps &
  Omit<ProductsListScreenComponentProps, keyof MappedProps>;

export const ProductsListScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const categoryId: string = props.navigation.getParam('categoryId');

  const category = getCategoryDetails(categoryId);
  const products = getProductsInCategory(categoryId);

  const onProductsListItemPressed = (productId: string) => {
    props.navigation.navigate('ProductDetails', {
      productId,
    });
  };

  return (
    <ProductsListScreenComponent
      category={category}
      products={products}
      onProductsListItemPressed={onProductsListItemPressed}
      {...props}
    />
  );
};
