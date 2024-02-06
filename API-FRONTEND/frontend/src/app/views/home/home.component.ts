import { Head } from 'rxjs';
import { HeaderService } from './../../components/template/header/header.service';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private HeaderService: HeaderService){
    HeaderService.headerData = {
      title: 'Inicio',
      icon: 'home',
      routeUrl: '/products'
    }
  }

}
