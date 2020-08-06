import { Product } from '../model/product.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addCoin(state: Product[] = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
