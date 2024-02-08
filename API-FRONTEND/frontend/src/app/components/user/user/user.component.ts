import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  condition1:boolean = false
  condition2:boolean = true

  senha:string = "12345678"
  

 user: User = {
  email: '',
  senha: ''
 }
  constructor(private Route:Router,
    private userService:UserService){

  }



  Clickbuttonlogin():void{
    this.userService.checkUser(this.user).subscribe( () => {
      this.userService.showMessage("Login Aceito!")
      this.Route.navigate(["home"])
      
    })
  }

  cancel() :void{
    this.condition1 = false
    this.condition2 = true

  }
  
  ClickButtonPagCadastro():void {
    this.condition1 = true
    this.condition2 = false
  }

  saveuser():void {

      const inputPasswordElement = document.getElementById('pass') as HTMLInputElement
      const transformpass = inputPasswordElement.value
    if( transformpass.length < this.senha.length){
        this.userService.showMessage("A senha precisa ter no minimo 8 caracteres")
    } else {

    this.userService.saveUser(this.user).subscribe(() => {
      this.userService.showMessage("Usuario Cadastrado")
      this.condition1 = false
      this.condition2 = true
    })
  }}
}
