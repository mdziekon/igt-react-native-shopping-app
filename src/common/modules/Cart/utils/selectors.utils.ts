import { RootState } from '@mdziekon/igt-shopping/common/rootState/root.reducer';

export const selectCartItems = (state: RootState) => state.cart.items;
