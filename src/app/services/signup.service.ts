import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = "http://localhost:5192/Auth/register";
  
  constructor(private http: HttpClient) { }

  public signup(signupForm:any):Observable<any>{

    return this.http.post(this.apiUrl, signupForm)

  }
}
