import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.states';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addProduct(name, price) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        name,
        price
      }
    });

    this.myForm.reset();
  }

}
