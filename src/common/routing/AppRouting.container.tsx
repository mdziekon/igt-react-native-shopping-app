import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from '@mdziekon/igt-shopping/modules/Home/screens/HomeScreen';
import { AboutScreen } from '@mdziekon/igt-shopping/modules/About/screens/AboutScreen';
import { ProductCategoriesScreen } from '@mdziekon/igt-shopping/modules/Products/screens/ProductCategoriesScreen';
import { ProductsListScreen } from '@mdziekon/igt-shopping/modules/Products/screens/ProductsListScreen';
import {
  getCategoryDetails,
  getProductDetails,
} from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';
import { ProductDetailsScreen } from '@mdziekon/igt-shopping/modules/Products/screens/ProductDetailsScreen';
import { CartSummaryScreen } from '@mdziekon/igt-shopping/modules/Cart/screens/CartSummaryScreen';
import { CartOrderReceiptScreen } from '@mdziekon/igt-shopping/modules/Cart/screens/CartOrderReceiptScreen';

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
        const categoryId: string = navigation.getParam('categoryId');
        const category = getCategoryDetails(categoryId);

        return {
          title: `Products (${category.title})`,
        };
      },
    },
    ProductDetails: {
      getScreen: () => ProductDetailsScreen,
      navigationOptions: ({ navigation }) => {
        const productId: string = navigation.getParam('productId');
        const product = getProductDetails(productId);

        return {
          title: `Product: ${product.title}`,
        };
      },
    },
    CartSummary: {
      getScreen: () => CartSummaryScreen,
      navigationOptions: {
        title: 'Cart summary',
      },
    },
    CartOrderReceipt: {
      getScreen: () => CartOrderReceiptScreen,
      navigationOptions: {
        title: "Order's receipt",
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
