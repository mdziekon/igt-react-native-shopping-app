import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreenComponent } from '@mdziekon/igt-shopping/modules/Home/components/HomeScreen/HomeScreen.component';

const AppNavigator = createStackNavigator(
  {
    Home: {
      getScreen: () => HomeScreenComponent,
      navigationOptions: {
        title: 'Home',
      },
    },
  },
  {
    initialRouteKey: 'Home',
  },
);

export const AppRoutingContainer = createAppContainer(AppNavigator);
