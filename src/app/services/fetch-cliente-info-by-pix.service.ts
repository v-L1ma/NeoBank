import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchClienteInfoByPixService {

  private apiUrl = "http://localhost:5192/Cliente/chavePix/";

  constructor(private http: HttpClient) { }
  
  fetch(id:string):Observable<any>{
    return this.http.get(this.apiUrl+id)
  }
}
