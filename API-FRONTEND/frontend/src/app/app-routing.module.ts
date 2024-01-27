import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from'./views/home/home.component';
import { ProductCrudComponent} from './views/product-crud/product-crud.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsReadComponent } from './components/products/products-read/products-read.component';
import { ProductsRead2Component } from './components/products/products-read2/products-read2.component';
import { ProductsUptadeComponent } from './components/products/products-uptade/products-uptade.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path:"products/create",
  component: ProductsCreateComponent
},
{
  path:"products/read",
  component: ProductsReadComponent
},
{
  path:"products/read2",
  component:ProductsRead2Component
},
{
  path:"products/uptade",
  component:ProductsUptadeComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
