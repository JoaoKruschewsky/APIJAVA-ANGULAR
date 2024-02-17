import { HeaderService } from './../../template/header/header.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    nameproduct:"",
    amount: 0,
    price: 0
  }


  constructor(private productService: ProductService,
    private root: Router,
    private MatSnackBar: MatSnackBar, 
    private HeaderService: HeaderService)

    {
      HeaderService.headerData = {
        title: 'Cadastro de Produtos',
        icon: 'create',
        routeUrl: '/products/create'
      }


  }
  ngOnInit(): void {
   

  }

 CreateProduct(): void{
    const htmlNameProducts = document.getElementById('nameproduct') as HTMLInputElement
    const htmlAmount = document.getElementById('amount') as HTMLInputElement
    const htmlValue = document.getElementById('value') as HTMLInputElement

    const nameproduct = htmlNameProducts.value
    const amount =  htmlAmount.value
    const value =  htmlValue.value
    

    if (nameproduct == "") {
      this.productService.showMessage("Porfavor insira o Nome do Produto")
    
     } else  if (amount == null) {
        this.productService.showMessage("Porfavor insira a Quantidade de Produtos")
      
      } else if (value == "") {
          this.productService.showMessage("Porfavor insira o Valor do Produto")

        } else {
          
      
          const valueWithDot = value.replace(',', '.'); // Substitui vírgulas por pontos
          const valueNew = parseFloat(valueWithDot); // Converte para ponto flutuante
          const formattedValue = valueNew.toFixed(3); // Formata com 3 casas decimais
         
          
            this.product.price =  valueNew
            this.productService.Create(this.product).subscribe(() =>{
             this.productService.showMessage("Protudo criado com sucesso!")
             this.root.navigate(["/products"])
     
           })
           }
          
       
      
    } 
    


      

    
    
  

 

  cancel(): void {
    this.root.navigate(["/products"])
  }

}
 

