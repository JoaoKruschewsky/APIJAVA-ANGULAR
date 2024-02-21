import { Sector } from './../../../models/sector.models';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SectorService } from '../../../services/sector.service';

@Component({
  selector: 'app-sector-delete',
  templateUrl: './sector-delete.component.html',
  styleUrl: './sector-delete.component.css'
})
  export class SectorDeleteComponent {
    card = true 

    Sector: Sector = {} as Sector
    constructor(private serviceSector:SectorService,
      ){

    }
    closeCard():void {
      this.card = false
    }


    deletSector(): void {
      this.serviceSector.deletSector(this.Sector).subscribe(() => {
        this.serviceSector.showMessage("Setor deletado com sucesso!")
      })
    }
}
