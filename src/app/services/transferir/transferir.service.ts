import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferenciaResponse } from '../../types/TransferenciaResponse';

interface ITransferenciaRequest {
  senderId?: string,
  clienteId?: string,
  chavePix?: string,
  value?: number,
  password?: string
}
@Injectable({
  providedIn: 'root'
})
export class TransferirService {

  private apiUrl = "http://localhost:5192/Transacoes/";

  constructor(private http: HttpClient) { }

  public transferir(TransferenciaRequest: ITransferenciaRequest, transacao:string):Observable<TransferenciaResponse>{
    return this.http.post<TransferenciaResponse>(this.apiUrl+transacao, TransferenciaRequest)
  }
}
