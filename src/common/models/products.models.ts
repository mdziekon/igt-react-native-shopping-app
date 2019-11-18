export namespace Products {
  export interface Category {
    categoryId: string;
    title: string;

    products: Product[];
  }

  export interface Product {
    productId: string;
    categoryId: string;
    title: string;
    price: string;
    image: string;
  }
}
