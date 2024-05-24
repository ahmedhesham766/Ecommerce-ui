import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { RegisterData } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AuthapiUrl =environment.AuthapiUrl;
  constructor(private http: HttpClient) {}

  public login(userName : string , password : string) : Observable<any>
  {
      return this.http.post(`${this.AuthapiUrl}/login`, {userName,password});
  }

  public register(registerData: RegisterData) : Observable<any>
  {
    return this.http.post<any>(`${this.AuthapiUrl}/register`, registerData);
  }
}
