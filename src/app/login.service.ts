import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  
  
  checkCredentials(email:string, password:string):number{
    return 1;
  }
}
