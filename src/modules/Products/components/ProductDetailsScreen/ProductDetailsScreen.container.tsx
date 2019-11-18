import React from 'react';

import {
  ProductDetailsScreenComponent,
  ProductDetailsScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/components/ProductDetailsScreen/ProductDetailsScreen.component';
import {
  getCategoryDetails,
  getProductDetails,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';

type MappedPropNames = 'category' | 'product';

type MappedProps = Pick<ProductDetailsScreenComponentProps, MappedPropNames>;
type OwnProps = {};

type ContainerProps = OwnProps &
  Omit<ProductDetailsScreenComponentProps, keyof MappedProps>;

export const ProductDetailsScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const productId = props.navigation.getParam('productId');

  const product = getProductDetails(productId);
  const category = getCategoryDetails(product.categoryId);

  return (
    <ProductDetailsScreenComponent
      category={category}
      product={product}
      {...props}
    />
  );
};
