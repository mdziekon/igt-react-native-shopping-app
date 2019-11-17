import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Title,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Icon,
} from 'native-base';

export const HomeScreenComponent: React.FC = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>Welcome!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button iconLeft block primary style={styles.ctaButton}>
          <Icon type="Ionicons" name="apps" />
          <Text>Open product categories</Text>
        </Button>
        <Button iconLeft block primary bordered style={styles.ctaButton}>
          <Icon type="Ionicons" name="help-circle-outline" />
          <Text>About</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  ctaButton: {
    marginTop: 10,
  },
});
