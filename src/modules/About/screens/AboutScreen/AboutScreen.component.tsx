import React from 'react';
import { Container, Content, Text } from 'native-base';
import { NavigationInjectedProps } from 'react-navigation';

type InjectedProps = NavigationInjectedProps;
type AboutScreenComponentProps = InjectedProps;

export const AboutScreenComponent: React.FC<AboutScreenComponentProps> = () => {
  return (
    <Container>
      <Content padder>
        <Text>Author: Michał Dziekoński</Text>
      </Content>
    </Container>
  );
};
