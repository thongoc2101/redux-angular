import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export class AddProductAction implements Action {
  type = ADD_PRODUCT;

  constructor(public payload: Product[]) { }
}
