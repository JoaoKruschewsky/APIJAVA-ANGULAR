import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from'./views/home/home.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsReadComponent } from './components/products/products-read/products-read.component';
import { ProductsRead2Component } from './components/products/products-read2/products-read2.component';
import { ProductsUptadeComponent } from './components/products/products-uptade/products-uptade.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
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
  path:"products/uptade/:id",
  component:ProductsUptadeComponent
},
{
  path: "products/delete/:id",
  component:ProductsDeleteComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
