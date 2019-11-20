import React from 'react';
import {
  Container,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
  Icon,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import { NavigationInjectedProps, StackActions } from 'react-navigation';
import {
  getProductThumbnailUri,
  getProductDetails,
  getCategoryDetails,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';
import { StyleSheet } from 'react-native';

type CartSummaryScreenComponentOwnProps = {
  cartItems: Cart.Item[];

  onClearCartBtnPressed: () => void;
};
type InjectedProps = NavigationInjectedProps;

export type CartSummaryScreenComponentProps = CartSummaryScreenComponentOwnProps &
  InjectedProps;

export const CartSummaryScreenComponent: React.FC<CartSummaryScreenComponentProps> = (
  props,
) => {
  const total = props.cartItems.reduce((accumulator, cartItem) => {
    const productDetails = getProductDetails(cartItem.productId);
    const subtotal = Number(productDetails.price) * cartItem.quantity;

    return accumulator + subtotal;
  }, 0);

  return (
    <Container>
      <Content padder>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>Review your Cart's content</Text>
            </Body>
          </CardItem>
        </Card>

        <List>
          {props.cartItems.map((cartItem) => {
            const { productId } = cartItem;
            const product = getProductDetails(productId);
            const category = getCategoryDetails(product.categoryId);
            const productThumbnailUri = getProductThumbnailUri(product);

            const subtotal = Number(product.price) * cartItem.quantity;

            return (
              <ListItem thumbnail key={productId}>
                <Left>
                  <Thumbnail
                    square
                    style={styles.cartItemThumbnail}
                    source={{ uri: productThumbnailUri }}
                  />
                </Left>
                <Body>
                  <Text>{product.title}</Text>
                  <Text note numberOfLines={1} style={styles.cartItemCategory}>
                    {category.title}
                  </Text>
                  <Text note numberOfLines={1}>
                    Quantity: {cartItem.quantity}
                  </Text>
                </Body>
                <Right>
                  <Text note numberOfLines={1}>
                    Subtotal: ${subtotal}
                  </Text>
                </Right>
              </ListItem>
            );
          })}

          <ListItem thumbnail key={'item-total'}>
            <Body>
              <Text />
            </Body>
            <Right>
              <Text style={styles.totalListItem} note numberOfLines={1}>
                Total: ${total}
              </Text>
            </Right>
          </ListItem>
          <ListItem thumbnail noBorder key={'item-clear-cart'}>
            <Body>
              <Text />
            </Body>
            <Right>
              <Button bordered warning onPress={props.onClearCartBtnPressed}>
                <Text>Clear cart</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>

      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              // TODO: this behaviour should come from the container
              // TODO: replace with actual order generation
              const replaceAction = StackActions.replace({
                routeName: 'CartOrderReceipt',
                params: {
                  orderId: 'abc123xyz',
                },
              });

              props.navigation.dispatch(replaceAction);
            }}
          >
            <Icon type="Ionicons" name="card" />
            <Text>Confirm & Pay</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  cartItemCategory: {
    fontSize: 10,
    marginBottom: 6,
  },
  cartItemThumbnail: {
    width: 48,
    height: 48,
  },
  totalListItem: {
    fontWeight: 'bold',
  },
});
