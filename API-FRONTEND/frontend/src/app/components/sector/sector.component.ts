import { Sector } from './../../models/sector.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrl: './sector.component.css'
})
export class SectorComponent {


  Sector:Sector = {
    name: ""
  }
}
