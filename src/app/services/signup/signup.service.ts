import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { TRegisterResponse } from '../../types/TRegisterResponse';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  constructor(private http: HttpClient) { }

  public signup(signupForm:any):Observable<TRegisterResponse>{

    return this.http.post<TRegisterResponse>(`${environment.apiUrl}/Auth/register`, signupForm)

  }
}
