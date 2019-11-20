import React from 'react';
import { useSelector } from 'react-redux';

import {
  FooterComponent,
  FooterComponentProps,
} from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer/Footer.component';
import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';
import { withNavigation } from 'react-navigation';

type MappedPropNames = 'cartItems';

type MappedProps = Pick<FooterComponentProps, MappedPropNames>;
type OwnProps = Omit<FooterComponentProps, keyof MappedProps>;

const FooterContainerBase: React.FC<OwnProps> = (props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return <FooterComponent cartItems={cartItems} {...props} />;
};

export const FooterContainer = withNavigation(FooterContainerBase);
