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


  displayedColumns = [ 'name'];

  Sector:Sector = {
    name: ""
  }
 dataSource:Sector[] = []
  

  saveSector():void {
    this.sectorservice.saveSector(this.Sector).subscribe(() => {
      this.sectorservice.showMessage("Novo setor adicionado!")
      this.root.navigate(['/views/register'])
    })
  }
  
  listSector(): void {
     this.sectorservice.listSector().subscribe(sector => {
      console.log(this.dataSource)
      this.viewTable = true;
      this.dataSource = sector
      
    });
  }
}
