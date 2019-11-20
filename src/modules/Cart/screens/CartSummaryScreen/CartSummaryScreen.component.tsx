import React from 'react';
import { Container, Content, List } from 'native-base';
import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';
import { CartItem } from '@mdziekon/igt-shopping/modules/Cart/screens/CartSummaryScreen/CartItem/CartItem.component';
import { CartSummaryItem } from '@mdziekon/igt-shopping/modules/Cart/screens/CartSummaryScreen/CartSummaryItem/OrderSummaryItem.component';
import { CartActions } from '@mdziekon/igt-shopping/modules/Cart/screens/CartSummaryScreen/CartActions/CartActions.component';
import { CartFooter } from '@mdziekon/igt-shopping/modules/Cart/screens/CartSummaryScreen/CartFooter/CartFooter.component';
import { CartHeader } from '@mdziekon/igt-shopping/modules/Cart/screens/CartSummaryScreen/CartHeader/CartHeader.component';

type CartSummaryScreenComponentOwnProps = {
  cartItems: Cart.Item[];

  onClearCartBtnPressed: () => void;
  onConfirmAndPayBtnPressed: () => void;
};

export type CartSummaryScreenComponentProps = CartSummaryScreenComponentOwnProps;

export const CartSummaryScreenComponent: React.FC<CartSummaryScreenComponentProps> = (
  props,
) => {
  return (
    <Container>
      <Content padder>
        <CartHeader />

        <List>
          {props.cartItems.map((cartItem) => {
            return <CartItem key={cartItem.productId} cartItem={cartItem} />;
          })}

          <CartSummaryItem key={'item-total'} cartItems={props.cartItems} />
          <CartActions
            key={'item-clear-cart'}
            onClearCartBtnPressed={props.onClearCartBtnPressed}
          />
        </List>
      </Content>

      <CartFooter onConfirmAndPayBtnPressed={props.onConfirmAndPayBtnPressed} />
    </Container>
  );
};
