import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  private apiUrl = "http://localhost:5192/Cliente/transacoes/"
  transacoes: any[] = [];

  constructor(private http: HttpClient) { }

  public extrato(id:string) : Observable<any> {
    return this.http.get<any[]>(this.apiUrl+id);
  }
}
