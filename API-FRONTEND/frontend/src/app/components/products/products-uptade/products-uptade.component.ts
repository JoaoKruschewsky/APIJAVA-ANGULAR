import { ActivatedRoute, Route, Router } from '@angular/router';
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


  product: Product = {} as Product
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const id2 = id ? parseInt(id, 10) : 0; // Convertendo para número se não for nulo

    if (!isNaN(id2) && id2 !== 0) {

      this.productService.readById(id2).subscribe(product => {
        this.product = product;


      });
    } else {
      console.error("ID da rota é inválido ou nulo.");
    }
  }


  updateProduct(): void {
    this.productService.uptade(this.product).subscribe(() => {
      this.productService.showMessage("Produto Salvo com sucesso!")
      this.router.navigate(["/product"])
    })
  }

  cancel(): void {
    this.router.navigate(['/products/read']);
  }
}
