import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  create = false
  sector = false
  constructor( private root:Router){

  }

 
  clickProduct():void {
    
    this.create = true
    this.sector = false
    
    
  }
  clickSector():void {
    this.sector = true
    this.create = false
  }
}
