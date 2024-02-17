import { EMPTY, Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sector } from '../models/sector.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SectorService  {

  constructor(private http:HttpClient, private snackbar:MatSnackBar) { }

  urlSave = "http://localhost:8080/sector/save"


  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-success'] : ['msg-error']
    })
  }

  
  saveSector(sector:Sector): Observable<Sector>  {
    return this.http.post<Sector>(this.urlSave, sector).pipe(
      catchError(e => this.erroHandler(e))
    )
  }


  erroHandler(e: any): Observable<any> {
    this.showMessage('Já existe setor com esse nome!', true);
    return EMPTY;
  }
}
