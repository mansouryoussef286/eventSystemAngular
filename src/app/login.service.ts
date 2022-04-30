import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string= "http://localhost:2525/login/";
  constructor(public http:HttpClient) { }
  
  checkCredentials(email:string, password:string){
    return this.http.post<{message: string ,token: string}>(this.baseUrl,{
      "email": email,
      "password": password
    });
  }
}
