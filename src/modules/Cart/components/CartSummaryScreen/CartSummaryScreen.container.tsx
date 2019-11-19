import React from 'react';
import { useSelector } from 'react-redux';

import {
  CartSummaryScreenComponent,
  CartSummaryScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Cart/components/CartSummaryScreen/CartSummaryScreen.component';
import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';

type MappedPropNames = 'cartItems';

type MappedProps = Pick<CartSummaryScreenComponentProps, MappedPropNames>;
type OwnProps = Omit<CartSummaryScreenComponentProps, keyof MappedProps>;

export const CartSummaryScreenContainer: React.FC<OwnProps> = (props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return <CartSummaryScreenComponent cartItems={cartItems} {...props} />;
};
