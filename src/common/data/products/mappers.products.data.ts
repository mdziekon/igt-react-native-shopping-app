import {
  getCategories,
  getProducts,
} from '@mdziekon/igt-shopping/common/data/products/source.products.data';

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
    throw new Error('Invalid categoryId');
  }

  return matchingCategory;
};
