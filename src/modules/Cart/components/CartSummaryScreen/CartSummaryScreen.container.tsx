import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  CartSummaryScreenComponent,
  CartSummaryScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Cart/components/CartSummaryScreen/CartSummaryScreen.component';
import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';
import { cartActionCreators } from '@mdziekon/igt-shopping/common/modules/Cart/actions/cart.actions';

type MappedPropNames = 'cartItems';
type DispatchPropNames = 'onClearCartBtnPressed';

type MappedProps = Pick<CartSummaryScreenComponentProps, MappedPropNames>;
type DispatchProps = Pick<CartSummaryScreenComponentProps, DispatchPropNames>;
type OwnProps = Omit<CartSummaryScreenComponentProps, keyof MappedProps>;

export const CartSummaryScreenContainer: React.FC<OwnProps> = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const onClearCartBtnPressed = () => dispatch(cartActionCreators.clearCart());

  return (
    <CartSummaryScreenComponent
      cartItems={cartItems}
      onClearCartBtnPressed={onClearCartBtnPressed}
      {...props}
    />
  );
};
