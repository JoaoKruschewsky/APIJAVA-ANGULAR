import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  condition1:boolean = false
  condition2:boolean = true

 user: User = {
  email: '',
  senha: ''
 }
  constructor(private Route:Router){

  }



  Clickbuttonlogin():void{
    this.Route.navigate(["home"])
  }

  cancel() :void{
    this.condition1 = false
    this.condition2 = true

  }
  
  ClickButtonCadastro():void {
    this.condition1 = true
    this.condition2 = false
  }
}
