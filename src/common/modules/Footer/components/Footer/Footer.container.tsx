import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import {
  FooterComponent,
  FooterComponentProps,
} from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer/Footer.component';
import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';

type MappedPropNames = 'cartItems' | 'onCartBtnPressed';

type MappedProps = Pick<FooterComponentProps, MappedPropNames>;
type ContainerProps = Omit<FooterComponentProps, keyof MappedProps>;

export const FooterContainer: React.FC<ContainerProps> = (props) => {
  const navigation = useNavigation();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const onCartBtnPressed = () => navigation.navigate('CartSummary');

  return (
    <FooterComponent
      cartItems={cartItems}
      onCartBtnPressed={onCartBtnPressed}
      {...props}
    />
  );
};
