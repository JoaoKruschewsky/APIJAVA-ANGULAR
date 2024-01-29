import { DataSource } from '@angular/cdk/collections';
import { ProductService } from './../../product/product.service';
import { Product } from './../product.model';
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
 
  displayedColumns = ['id', 'nameproduct','amount', 'value', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
    constructor(private ProductService:ProductService) {

    }
    ngAfterViewInit(): void {
      this.products = this.products
      this.ProductService.paginator = this.paginator
      this.ProductService.sort = this.sort
        this.ProductService.Read().subscribe(products => {
          
          this.table.dataSource = products
          
         
        })
       
    } 
   
 
  }
