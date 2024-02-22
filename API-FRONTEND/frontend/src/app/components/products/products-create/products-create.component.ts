import { Sector } from './../../../models/sector.models';
import { SectorService } from './../../../services/sector.service';
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
    price: 0,
    validity: new Date(),
    sector: {
      id:0
   
    }
  }
  sectors: Sector[] = [] // Corrigindo o nome da variável para 'sectors'



  manipulationId:number = 0
  checkEventSelect = false
  nameOption:string = ""

  constructor(private productService: ProductService,
    private root: Router,
    private MatSnackBar: MatSnackBar, 
    private HeaderService: HeaderService,
    private sectorService: SectorService)

    {
      HeaderService.headerData = {
        title: 'Cadastro de Produtos',
        icon: 'create',
        routeUrl: '/products/create'
      }


  }
  ngOnInit(): void {
    this.sectorService.listSector().subscribe(sector => {
      console.log(sector)
      this.sectors = sector;
    })

  }
  onSelectChange(event: any) {

    if(event) {
      const selectedSectorId = event.target.value;
    
      this.checkEventSelect = true
   
      // Agora você pode fazer o que quiser com o ID selecionado, como passá-lo para outro método para manipulação
      this.manipulationId = selectedSectorId
     
    } else {
      this.checkEventSelect = false

    }
  
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

        } else  if (this.checkEventSelect == false ){
          this.productService.showMessage("Porfavor Selecione um Setor")

           } else {
              
      
          const valueWithDot = value.replace(',', '.'); // Substitui vírgulas por pontos
          const valueNew = parseFloat(valueWithDot); // Converte para ponto flutuante
          const formattedValue = valueNew.toFixed(3); // Formata com 3 casas decimais

            this.product.sector.id = this.manipulationId
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
 

