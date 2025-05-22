import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:5192/Auth/login";

  constructor(private http: HttpClient) { }

  login(loginForm:any):Observable<any>{
    return this.http.post(this.apiUrl, loginForm)
  }

  
}
