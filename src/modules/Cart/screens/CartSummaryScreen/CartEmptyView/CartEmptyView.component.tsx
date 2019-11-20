import React from 'react';
import { Text, Container, Content, Card, CardItem, Body } from 'native-base';

type CartEmptyViewProps = {};

export const CartEmptyView: React.FC<CartEmptyViewProps> = () => {
  return (
    <Container>
      <Content padder>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Your cart is empty...</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
