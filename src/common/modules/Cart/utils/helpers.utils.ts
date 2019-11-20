import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';
import { Order } from '@mdziekon/igt-shopping/common/models/order.models';
import { getProductDetails } from '@mdziekon/igt-shopping/common/data/products/mappers.products.data';

export const generateOrder = (params: { cartItems: Cart.Item[] }) => {
  const order: Order.Order = {
    orderId: String(Math.floor(Math.random() * 1000000)),
    items: params.cartItems.map(
      (cartItem): Order.OrderItem => {
        const product = getProductDetails(cartItem.productId);

        return {
          productId: cartItem.productId,
          quantity: cartItem.quantity,
          orderPrice: product.price,
        };
      },
    ),
  };

  return order;
};
