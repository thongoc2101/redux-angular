import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { AppState } from '../app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.products = this.store.select(state => state.product);
  }

  ngOnInit(): void {
  }

}
