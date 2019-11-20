import {
  createAction,
  GenerateActionsUnion,
} from '@mdziekon/igt-shopping/common/utils/actionHelpers.utils';
import { NavigationScreenProp } from 'react-navigation';

export enum CartActionTypes {
  AddItem = '@Common/Cart/ADD_ITEM',
  RemoveItem = '@Common/Cart/REMOVE_ITEM',
  ClearCart = '@Common/Cart/CLEAR_CART',
  SubmitCart = '@Common/Cart/SUBMIT_CART',
}

export const cartActionCreators = {
  addItem: (payload: { productId: string; quantity?: number }) =>
    createAction(CartActionTypes.AddItem, payload),
  removeItem: (payload: { productId: string; quantity?: number }) =>
    createAction(CartActionTypes.RemoveItem, payload),
  clearCart: () => createAction(CartActionTypes.ClearCart),
  submitCart: (payload: { navigation: NavigationScreenProp<unknown> }) =>
    createAction(CartActionTypes.SubmitCart, payload),
};

export type CartAction = GenerateActionsUnion<typeof cartActionCreators>;
