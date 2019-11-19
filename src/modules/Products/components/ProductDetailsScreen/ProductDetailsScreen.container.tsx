import React from 'react';
import { useDispatch } from 'react-redux';

import {
  ProductDetailsScreenComponent,
  ProductDetailsScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/components/ProductDetailsScreen/ProductDetailsScreen.component';
import {
  getCategoryDetails,
  getProductDetails,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { cartActionCreators } from '@mdziekon/igt-shopping/common/modules/Cart/actions/cart.actions';

type MappedPropNames = 'category' | 'product';
type DispatchPropNames = 'onAddToCartPressed';

type MappedProps = Pick<ProductDetailsScreenComponentProps, MappedPropNames>;
type DispatchProps = Pick<
  ProductDetailsScreenComponentProps,
  DispatchPropNames
>;
type OwnProps = {};

type ContainerProps = OwnProps &
  Omit<ProductDetailsScreenComponentProps, keyof MappedProps & DispatchProps>;

export const ProductDetailsScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const dispatch = useDispatch();

  const productId: string = props.navigation.getParam('productId');

  const product = getProductDetails(productId);
  const category = getCategoryDetails(product.categoryId);

  const onAddToCartPressed = () =>
    dispatch(cartActionCreators.addItem(productId));

  return (
    <ProductDetailsScreenComponent
      category={category}
      product={product}
      onAddToCartPressed={onAddToCartPressed}
      {...props}
    />
  );
};
