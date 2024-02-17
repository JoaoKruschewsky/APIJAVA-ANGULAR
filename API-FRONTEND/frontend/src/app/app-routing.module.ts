import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from'./views/home/home.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsReadComponent } from './components/products/products-read/products-read.component';
import { ProductsUptadeComponent } from './components/products/products-uptade/products-uptade.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { UserComponent } from './components/user/user.component';
import { LayoutComponent } from './views/layout/layout.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: 'login', component: UserComponent }, 

  {
    path: 'layout',
    component:LayoutComponent},
{ path: 'home', component: HomeComponent }, // Rota para o HomeComponent (raiz)

      {
        path:"products/create",
        component: ProductsCreateComponent
      },
      {
        path:"products/read",
        component: ProductsReadComponent
      },
      {
        path:"products/uptade/:id",
        component:ProductsUptadeComponent
      },
      {
        path: "products/delete/:id",
        component:ProductsDeleteComponent
      },
      {
        path:"views/register",
        component:RegisterComponent
      }
    
  
  // Rota para o UserComponent



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
