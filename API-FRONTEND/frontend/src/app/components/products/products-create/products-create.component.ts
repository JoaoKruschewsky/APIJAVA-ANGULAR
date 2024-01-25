import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationService } from './../../product/validation.service';
import { ProductService } from './../../product/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    nameproduct:'',
    amount: '',
    value: 0
  }


  constructor(private productService: ProductService,
    private ValidationService: ValidationService,
    private root: Router,
    private MatSnackBar: MatSnackBar)
    {

  }
  ngOnInit(): void {
   

  }

 CreateProduct(): void{
    
      
        this.productService.Create(this.product).subscribe(() =>{
        this.productService.showMessage("Protudo criado com sucesso!")
        this.root.navigate(["/products"])

      })

    
    
  }

 

  cancel(): void {
    this.root.navigate(["/products"])
  }


 
}
