import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

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

type ContainerProps = Omit<ProductsListScreenComponentProps, keyof MappedProps>;

export const ProductsListScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const navigation = useNavigation();

  const categoryId: string = navigation.getParam('categoryId');

  const category = getCategoryDetails(categoryId);
  const products = getProductsInCategory(categoryId);

  const onProductsListItemPressed = (productId: string) => {
    navigation.navigate('ProductDetails', {
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
