import React from 'react';
import { Container, Body, Content, Text, Card, CardItem } from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';

type InjectedProps = NavigationInjectedProps;
type AboutScreenComponentProps = InjectedProps;

export const AboutScreenComponent: React.FC<AboutScreenComponentProps> = () => {
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
      </Content>
    </Container>
  );
};
