import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import {
  ProductDetailsScreenComponent,
  ProductDetailsScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Products/screens/ProductDetailsScreen/ProductDetailsScreen.component';
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

type ContainerProps = Omit<
  ProductDetailsScreenComponentProps,
  keyof MappedProps & DispatchProps
>;

export const ProductDetailsScreenContainer: React.FC<ContainerProps> = (
  props,
) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const productId: string = navigation.getParam('productId');

  const product = getProductDetails(productId);
  const category = getCategoryDetails(product.categoryId);

  const onAddToCartPressed = () =>
    dispatch(cartActionCreators.addItem({ productId }));

  return (
    <ProductDetailsScreenComponent
      category={category}
      product={product}
      onAddToCartPressed={onAddToCartPressed}
      {...props}
    />
  );
};
