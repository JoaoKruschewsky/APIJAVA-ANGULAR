import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { SectorService } from '../../services/sector.service';
import { Sector } from './../../models/sector.models';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrl: './sector.component.css'
})
export class SectorComponent  {
  constructor(private sectorservice:SectorService,
    private root:Router,
    ){
   
  }

  viewTable = false
  showDelete = false

  displayedColumns = [ 'name',  'action'];

  Sector:Sector = {
    name: ""
  }
 dataSource:Sector[] = []
  
    showComponentDelete():void {
      this.showDelete = true
    }


  saveSector():void {
      const inputSector = document.getElementById('name') as HTMLInputElement
      const getValueInput = inputSector.value

      if (getValueInput != "") {
        this.sectorservice.saveSector(this.Sector).subscribe(() => {
          this.sectorservice.showMessage("Novo setor adicionado!")
          this.root.navigate(['/views/register'])
        })
      } else {
        this.sectorservice.showMessage("Insira Um setor Novo")
      }

 
  }
  
  listSector(): void {
     this.sectorservice.listSector().subscribe(sector => {
      console.log(this.dataSource)
      this.viewTable = true;
      this.dataSource = sector
      
    });
  }
}
