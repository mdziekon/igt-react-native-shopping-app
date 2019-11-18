import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Icon,
} from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';

type InjectedProps = NavigationInjectedProps;
type HomeScreenComponentProps = InjectedProps;

export const HomeScreenComponent: React.FC<HomeScreenComponentProps> = (
  props,
) => {
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>Welcome!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          iconLeft
          block
          primary
          style={styles.ctaButton}
          onPress={() => props.navigation.navigate('ProductCategories')}
        >
          <Icon type="Ionicons" name="apps" />
          <Text>Open product categories</Text>
        </Button>
        <Button
          iconLeft
          block
          primary
          bordered
          style={styles.ctaButton}
          onPress={() => props.navigation.navigate('About')}
        >
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
