import { Products } from '@mdziekon/igt-shopping/common/models/products.models';

export const getProducts = (): Products.Product[] => [
  {
    productId: '1',
    categoryId: '1',
    title: 'Winter Jacket',
    price: '10.00',
    image: 'jacket.png',
  },
  {
    productId: '2',
    categoryId: '1',
    title: 'Wrist watch',
    price: '30.00',
    image: 'watch.png',
  },
  {
    productId: '3',
    categoryId: '2',
    title: 'Wrist band',
    price: '5.00',
    image: 'band.png',
  },
  {
    productId: '4',
    categoryId: '2',
    title: 'Hand bag',
    price: '20.00',
    image: 'bag.png',
  },
  {
    productId: '5',
    categoryId: '3',
    title: 'Shoes',
    price: '20.00',
    image: 'shoes.png',
  },
  {
    productId: '6',
    categoryId: '3',
    title: 'Kids Scarf',
    price: '10.00',
    image: 'scarf.png',
  },
  {
    productId: '7',
    categoryId: '4',
    title: 'Soccer Ball',
    price: '20.00',
    image: 'soccerball.png',
  },
  {
    productId: '8',
    categoryId: '4',
    title: 'Base ball',
    price: '15.00',
    image: 'baseball.png',
  },
];

export const getCategories = (): Products.Category[] => [
  {
    categoryId: '1',
    title: 'Men Accessories',

    products: [],
  },
  {
    categoryId: '2',
    title: 'Women Accessories',

    products: [],
  },
  {
    categoryId: '3',
    title: 'Children Accessories',

    products: [],
  },
  {
    categoryId: '4',
    title: 'Sports Accessories',

    products: [],
  },
];
