import { Cart } from '@mdziekon/igt-shopping/common/modules/Cart/models/cart.models';
import {
  CartAction,
  CartActionTypes,
} from '@mdziekon/igt-shopping/common/modules/Cart/actions/cart.actions';

export interface CartState {
  items: Cart.Item[];
}

export const createCartReducer = () => {
  const initialState: CartState = {
    items: [],
  };

  const cartReducer = (
    state: CartState = initialState,
    action: CartAction,
  ): CartState => {
    switch (action.type) {
      case CartActionTypes.AddItem: {
        const foundDuplicateIdx = state.items.findIndex(
          (item) => item.productId === action.payload.productId,
        );

        const quantityToAdd = action.payload.quantity
          ? action.payload.quantity
          : 1;

        if (foundDuplicateIdx === -1) {
          return {
            ...state,
            items: [
              ...state.items,
              { productId: action.payload.productId, quantity: quantityToAdd },
            ],
          };
        }

        const duplicatedItem = state.items[foundDuplicateIdx];

        const updatedItem = {
          ...duplicatedItem,
          quantity: duplicatedItem.quantity + quantityToAdd,
        };

        return {
          ...state,
          items: [
            ...state.items.slice(0, foundDuplicateIdx),
            updatedItem,
            ...state.items.slice(foundDuplicateIdx + 1, state.items.length),
          ],
        };
      }
      case CartActionTypes.RemoveItem: {
        const itemIndex = state.items.findIndex(
          (item) => item.productId === action.payload.productId,
        );

        if (itemIndex === -1) {
          return state;
        }

        const quantityToRemove = action.payload.quantity
          ? action.payload.quantity
          : 1;

        const itemToRemove = state.items[itemIndex];

        if (itemToRemove.quantity <= quantityToRemove) {
          return {
            ...state,
            items: [
              ...state.items.slice(0, itemIndex),
              ...state.items.slice(itemIndex + 1, state.items.length),
            ],
          };
        }

        const updatedItem = {
          ...itemToRemove,
          quantity: itemToRemove.quantity - quantityToRemove,
        };

        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndex),
            updatedItem,
            ...state.items.slice(itemIndex + 1, state.items.length),
          ],
        };
      }
      case CartActionTypes.ClearCart: {
        return {
          ...state,
          items: [],
        };
      }
      default: {
        return state;
      }
    }
  };

  return cartReducer;
};
