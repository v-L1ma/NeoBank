import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LoginReponse } from '../../types/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginForm:any):Observable<LoginReponse>{
    return this.http.post<LoginReponse>(`${environment.apiUrl}/Auth/login`, loginForm)
  }

  
}
