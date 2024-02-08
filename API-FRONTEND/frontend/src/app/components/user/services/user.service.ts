import { MatSnackBar } from '@angular/material/snack-bar';
import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { Observable, catchError, tap, EMPTY, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private snackbar:MatSnackBar, private http:HttpClient) { }

  urlsaveUser = "http://localhost:8080/users/cadastrarusuario"
  urlgetUser = "http://localhost:8080/users/getuser"

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-success'] : ['msg-error']
    })
  }

  saveUser(user:User): Observable<User> {
    return this.http.post<User>(this.urlsaveUser, user).pipe(
      catchError(e => this.erroSaveUser(e)))
    
  }


  checkUser(user:User): Observable<User>{
    return this.http.post<User>(this.urlgetUser, user).pipe(
      map(obj => obj),
      catchError(e => this.erroUser(e))
    )

  }
  erroUser(e: any): Observable<any> {
    this.showMessage('Usuario nao existe', true);
    return EMPTY;
  }
  erroSaveUser(e: any): Observable<any> {
    this.showMessage('Já existe um usuario com esse Email ou Senha', true);
    return EMPTY;
  }
}
