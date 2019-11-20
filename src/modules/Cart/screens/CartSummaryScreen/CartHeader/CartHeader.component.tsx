import React from 'react';
import { Text, Card, CardItem, Body } from 'native-base';

interface CartHeaderProps {}

export const CartHeader: React.FC<CartHeaderProps> = () => {
  return (
    <Card transparent>
      <CardItem>
        <Body>
          <Text>Review your Cart's content</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
