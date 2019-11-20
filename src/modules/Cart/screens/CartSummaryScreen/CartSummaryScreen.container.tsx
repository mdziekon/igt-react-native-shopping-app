import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  CartSummaryScreenComponent,
  CartSummaryScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Cart/screens/CartSummaryScreen/CartSummaryScreen.component';
import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';
import { cartActionCreators } from '@mdziekon/igt-shopping/common/modules/Cart/actions/cart.actions';
import { NavigationInjectedProps, StackActions } from 'react-navigation';

type MappedPropNames =
  | 'cartItems'
  | 'onClearCartBtnPressed'
  | 'onConfirmAndPayBtnPressed';

type MappedProps = Pick<CartSummaryScreenComponentProps, MappedPropNames>;
type OwnProps = NavigationInjectedProps;

type ContainerProps = Omit<CartSummaryScreenComponentProps, keyof MappedProps> &
  OwnProps;

export const CartSummaryScreenContainer: React.FC<ContainerProps> = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const onClearCartBtnPressed = () => dispatch(cartActionCreators.clearCart());
  const onConfirmAndPayBtnPressed = () => {
    // TODO: replace with actual order generation
    const replaceAction = StackActions.replace({
      routeName: 'CartOrderReceipt',
      params: {
        orderId: 'abc123xyz',
      },
    });

    props.navigation.dispatch(replaceAction);
  };

  return (
    <CartSummaryScreenComponent
      cartItems={cartItems}
      onClearCartBtnPressed={onClearCartBtnPressed}
      onConfirmAndPayBtnPressed={onConfirmAndPayBtnPressed}
      {...props}
    />
  );
};
