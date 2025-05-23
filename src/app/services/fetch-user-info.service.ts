import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchUserInfoService {

  private apiUrl = "http://localhost:5192/Cliente/";

  constructor(private http: HttpClient) { }

  fetch(id:string):Observable<any>{
      return this.http.get(this.apiUrl+id);
  }
}
