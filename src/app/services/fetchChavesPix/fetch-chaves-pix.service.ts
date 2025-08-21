import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchChavesPixService {

  constructor(private http:HttpClient) { }
  private apiUrl = "http://localhost:8080/"
  executar(userId:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/ChavePix/${userId}`)
  }
}
