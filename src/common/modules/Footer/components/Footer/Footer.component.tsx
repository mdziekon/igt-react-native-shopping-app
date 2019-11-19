import React from 'react';
import { Text, Icon, Footer, FooterTab, Button, Badge } from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';

import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';

type FooterComponentOwnProps = {
  cartItems: Cart.Item[];
};
type InjectedProps = NavigationInjectedProps;

export type FooterComponentProps = FooterComponentOwnProps & InjectedProps;

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
          badge={hasItemsInCart}
          vertical
          onPress={() => props.navigation.navigate('CartSummary')}
        >
          {badgeNode}
          <Icon type="Ionicons" name="cart" />
          <Text>Cart</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
