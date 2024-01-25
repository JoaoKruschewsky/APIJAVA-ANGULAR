import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  ValitionIfInputIsNull(input:Product) {
    return input.value === 0 || input.nameproduct === '' || input.amount === '';

  }
}
