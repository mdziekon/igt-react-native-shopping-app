import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import {
  HomeScreenComponent,
  HomeScreenComponentProps,
} from '@mdziekon/igt-shopping/modules/Home/screens/HomeScreen/HomeScreen.component';

type MappedPropNames = 'onProductCategoriesBtnPressed' | 'onAboutBtnPressed';

type MappedProps = Pick<HomeScreenComponentProps, MappedPropNames>;

type ContainerProps = Omit<HomeScreenComponentProps, keyof MappedProps>;

export const HomeScreenContainer: React.FC<ContainerProps> = (props) => {
  const navigation = useNavigation();

  const onProductCategoriesBtnPressed = () => {
    navigation.navigate('ProductCategories');
  };

  const onAboutBtnPressed = () => {
    navigation.navigate('About');
  };

  return (
    <HomeScreenComponent
      onProductCategoriesBtnPressed={onProductCategoriesBtnPressed}
      onAboutBtnPressed={onAboutBtnPressed}
      {...props}
    />
  );
};
