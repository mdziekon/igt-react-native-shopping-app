import React from 'react';

import {
  FooterComponent,
  FooterComponentProps,
} from '@mdziekon/igt-shopping/common/modules/Footer/components/Footer/Footer.component';
import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';

type MappedPropNames = 'cartItems';

type MappedProps = Pick<FooterComponentProps, MappedPropNames>;
type OwnProps = Omit<FooterComponentProps, keyof MappedProps>;

export const FooterContainer: React.FC<OwnProps> = (props) => {
  // TODO: Replace with actual data fetching from the store
  const cartItems: Cart.Item[] = [
    {
      productId: '1',
      quantity: 1,
    },
  ];

  return <FooterComponent cartItems={cartItems} {...props} />;
};
