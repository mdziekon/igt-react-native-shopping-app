export namespace Order {
  export interface OrderItem {
    productId: string;
    quantity: number;
    orderPrice: string;
  }

  export interface Order {
    orderId: string;
    items: OrderItem[];
  }
}
