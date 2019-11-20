import React from 'react';
import { Text, Icon, Footer, FooterTab, Button, Badge } from 'native-base';

import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';

type FooterComponentOwnProps = {
  cartItems: Cart.Item[];

  onCartBtnPressed: () => void;
};

export type FooterComponentProps = FooterComponentOwnProps;

export const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  const hasItemsInCart = props.cartItems.length > 0;
  const totalCartItems = props.cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0,
  );

  const badgeNode = !hasItemsInCart ? null : (
    <Badge>
      <Text>{totalCartItems}</Text>
    </Badge>
  );

  return (
    <Footer>
      <FooterTab>
        <Button
          active={hasItemsInCart}
          badge={hasItemsInCart}
          vertical
          onPress={props.onCartBtnPressed}
        >
          {badgeNode}
          <Icon type="Ionicons" name="cart" />
          <Text>Cart</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
