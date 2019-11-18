import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from '@mdziekon/igt-shopping/modules/Home/components/HomeScreen';
import { AboutScreen } from '@mdziekon/igt-shopping/modules/About/components/AboutScreen';
import { ProductCategoriesScreen } from '@mdziekon/igt-shopping/modules/Products/components/ProductCategoriesScreen';
import { ProductsListScreen } from '@mdziekon/igt-shopping/modules/Products/components/ProductsListScreen';
import { getCategoryDetails } from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';

const AppNavigator = createStackNavigator(
  {
    Home: {
      getScreen: () => HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    ProductCategories: {
      getScreen: () => ProductCategoriesScreen,
      navigationOptions: {
        title: 'Product categories',
      },
    },
    ProductsList: {
      getScreen: () => ProductsListScreen,
      navigationOptions: ({ navigation }) => {
        const categoryId = navigation.getParam('categoryId');
        const category = getCategoryDetails(categoryId);

        return {
          title: `Products (${category.title})`,
        };
      },
    },
    About: {
      getScreen: () => AboutScreen,
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
