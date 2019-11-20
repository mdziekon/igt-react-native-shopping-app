import React from 'react';
import { ListItem, Body, Right, Text, Button } from 'native-base';

interface CartActionsProps {
  onClearCartBtnPressed: () => void;
}

export const CartActions: React.FC<CartActionsProps> = (props) => {
  return (
    <ListItem thumbnail noBorder>
      <Body>
        <Text />
      </Body>
      <Right>
        <Button bordered warning onPress={props.onClearCartBtnPressed}>
          <Text>Clear cart</Text>
        </Button>
      </Right>
    </ListItem>
  );
};
