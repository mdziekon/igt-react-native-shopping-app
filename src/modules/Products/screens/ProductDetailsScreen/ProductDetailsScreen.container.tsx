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

type MappedPropNames = 'category' | 'product' | 'onAddToCartPressed';

type MappedProps = Pick<ProductDetailsScreenComponentProps, MappedPropNames>;

type ContainerProps = Omit<
  ProductDetailsScreenComponentProps,
  keyof MappedProps
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
