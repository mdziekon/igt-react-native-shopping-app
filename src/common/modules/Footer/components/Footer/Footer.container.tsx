import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import {
  FooterComponent,
  FooterComponentProps,
} from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer/Footer.component';
import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';

type MappedPropNames = 'cartItems' | 'navigation';

type MappedProps = Pick<FooterComponentProps, MappedPropNames>;
type OwnProps = Omit<FooterComponentProps, keyof MappedProps>;

export const FooterContainer: React.FC<OwnProps> = (props) => {
  const navigation = useNavigation();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <FooterComponent cartItems={cartItems} navigation={navigation} {...props} />
  );
};
