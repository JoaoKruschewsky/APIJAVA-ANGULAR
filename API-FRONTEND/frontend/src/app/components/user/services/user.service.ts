import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  urlsaveUser = "http://localhost:8080/user/cadastrarusuario"
  urlgetUser = "http://localhost:8080/user/getsenha"


  saveUser(user:User): Observable<User> {
    return this.http.post<User>(this.urlsaveUser, user)
  }


  checkUser(user:User ): Observable<User>{
    return this.http.get<User>(this.urlgetUser);

  }
}
