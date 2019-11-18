import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreenComponent } from '@mdziekon/igt-shopping/modules/Home/components/HomeScreen/HomeScreen.component';
import { AboutScreenComponent } from '@mdziekon/igt-shopping/modules/About/components/AboutScreen/AboutScreen.component';
import { ProductCategoriesScreenComponent } from '@mdziekon/igt-shopping/modules/Products/components/ProductCategoriesScreen/ProductCategoriesScreen.component';

const AppNavigator = createStackNavigator(
  {
    Home: {
      getScreen: () => HomeScreenComponent,
      navigationOptions: {
        title: 'Home',
      },
    },
    ProductCategories: {
      getScreen: () => ProductCategoriesScreenComponent,
      navigationOptions: {
        title: 'Product categories',
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
