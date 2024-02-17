import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrl: './products-delete.component.css'
})
export class ProductsDeleteComponent implements OnInit {

  product: Product = {} as Product
  constructor (private router:Router,
    private ProductService:ProductService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const id2 = id ?  parseInt(id) : 0 
      this.ProductService.readById(id2).subscribe(product => {
        this.product = product
      })
  }
  delete(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const id2 = id ?  parseInt(id) : 0 
    this.ProductService.delete(this.product).subscribe(()=> {
      this.ProductService.showMessage("Produto deletetado com sucesso!")
      this.router.navigate(["/products/read"])
    })
  }
  cancel(): void {
    this.router.navigate(["/products/read"])
  }
}
