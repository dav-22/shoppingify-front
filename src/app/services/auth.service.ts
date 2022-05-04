import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.urlBase;
  controller: string = 'user';

  constructor(private _http: HttpClient)  { }

  setUserLogged(response: any) {
    localStorage.setItem('currentUser', JSON.stringify(response));
  }

  login(email: string, password: string): Observable<boolean> {
    return this._http.post<boolean>(`${this.url}/${this.controller}/login`, {email: email, password: password})
      .pipe(
        map((res: any) => {
          if(
            !res ||
            !res.token || 
            !res.user  
          ){
            return false;
          }
          
          this.setUserLogged(res);
          return true;
        })
      );
  }

  register(password: string, email:string, userName: string): Observable<User> {
    return this._http.post<User>(`${this.url}/${this.controller}/register`, 
    {
      password: password,
      email: email,
      userName: userName
    });
  }
}
