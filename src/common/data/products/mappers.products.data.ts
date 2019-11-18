import {
  getCategories,
  getProducts,
} from '@mdziekon/igt-shopping/common/data/products/source.products.data';
import { Products } from '@mdziekon/igt-shopping/common/models/products.models';

export const getProductsInCategory = (categoryId: string) => {
  const products = getProducts();

  return products.filter((product) => product.categoryId === categoryId);
};

export const getCategoryDetails = (categoryId: string) => {
  const categories = getCategories();

  const matchingCategory = categories.find(
    (category) => category.categoryId === categoryId,
  );

  if (!matchingCategory) {
    throw new Error('Category not found');
  }

  return matchingCategory;
};

export const getProductDetails = (productId: string) => {
  const products = getProducts();

  const matchingProduct = products.find(
    (product) => product.productId === productId,
  );

  if (!matchingProduct) {
    throw new Error('Product not found');
  }

  return matchingProduct;
};

export const getProductThumbnailUri = (_product: Products.Product) => {
  return '';
};
