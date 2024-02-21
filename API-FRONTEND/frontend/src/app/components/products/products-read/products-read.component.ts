import { SectorService } from './../../../services/sector.service';
import { Sector } from './../../../models/sector.models';
import { HeaderService } from './../../template/header/header.service';
import { DataSource } from '@angular/cdk/collections';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrl: './products-read.component.css'
})
export class ProductsReadComponent implements AfterViewInit{

  products: Product[] = []
  
  sector:Sector[] = []
 
  displayedColumns = [ 'nameproduct','amount', 'value', 'sector','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
    constructor(private ProductService:ProductService,
      private  HeaderService:HeaderService,
      private sectorService:SectorService) {
        HeaderService.headerData = {
          title: 'Produtos',
          icon: 'list',
          routeUrl: '/products/read'
        }
    }
 
    ngAfterViewInit(): void {
      this.ProductService.paginator = this.paginator
      this.ProductService.sort = this.sort

      this.ProductService.Read().subscribe(products => {
        
        this.table.dataSource = products
        
  
      })
      
    
    } 
   RefreshTable(): void {
    this.ProductService.Read().subscribe(products => {
     
      this.table.dataSource = products
      

    })
   }
 
  }
