import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreenComponent } from '@mdziekon/igt-shopping/modules/Home/components/HomeScreen/HomeScreen.component';
import { AboutScreenComponent } from '@mdziekon/igt-shopping/modules/About/components/AboutScreen/AboutScreen.component';

const AppNavigator = createStackNavigator(
  {
    Home: {
      getScreen: () => HomeScreenComponent,
      navigationOptions: {
        title: 'Home',
      },
    },
    About: {
      getScreen: () => AboutScreenComponent,
      navigationOptions: {
        title: 'About',
      },
    },
  },
  {
    initialRouteKey: 'Home',
  },
);

export const AppRoutingContainer = createAppContainer(AppNavigator);
