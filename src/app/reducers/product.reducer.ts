import { Product } from '../model/product.model';
import * as product from '../actions/product.action';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addCoin(state: Product[] = [], action: product.AddProductAction) {
  switch (action.type) {
    case product.ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
