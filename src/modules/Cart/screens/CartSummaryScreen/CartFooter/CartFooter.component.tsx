import React from 'react';
import { Text, Button, Footer, FooterTab, Icon } from 'native-base';

interface CartFooterProps {
  onConfirmAndPayBtnPressed: () => void;
}

export const CartFooter: React.FC<CartFooterProps> = (props) => {
  return (
    <Footer>
      <FooterTab>
        <Button active vertical onPress={props.onConfirmAndPayBtnPressed}>
          <Icon type="Ionicons" name="card" />
          <Text>Confirm & Pay</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
