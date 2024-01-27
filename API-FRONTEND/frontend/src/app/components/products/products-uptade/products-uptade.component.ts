import {  ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-products-uptade',
  templateUrl: './products-uptade.component.html',
  styleUrl: './products-uptade.component.css'
})
export class ProductsUptadeComponent implements OnInit {
 
 
  product: Product 

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
             product: Product ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.readById(id).subscribe(product => {
        this.product = product;
      });
    } else {
      console.error("ID da rota é nulo.");
    }
  }

  updateProduct() {
    // Implemente a lógica de atualização do produto aqui
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
