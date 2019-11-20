import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import {
  HomeScreenComponent,
  HomeScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Home/components/HomeScreen/HomeScreen.component';

type MappedPropNames = 'onProductCategoriesBtnPressed' | 'onAboutBtnPressed';

type MappedProps = Pick<HomeScreenComponentProps, MappedPropNames>;
type OwnProps = NavigationInjectedProps;

type ContainerProps = OwnProps &
  Omit<HomeScreenComponentProps, keyof MappedProps>;

export const HomeScreenContainer: React.FC<ContainerProps> = (props) => {
  const onProductCategoriesBtnPressed = () => {
    props.navigation.navigate('ProductCategories');
  };

  const onAboutBtnPressed = () => {
    props.navigation.navigate('About');
  };

  return (
    <HomeScreenComponent
      onProductCategoriesBtnPressed={onProductCategoriesBtnPressed}
      onAboutBtnPressed={onAboutBtnPressed}
      {...props}
    />
  );
};
