import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ITransferenciaRequest {
  senderId: string,
  chavePix: string,
  value: number,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class TransferirService {

  private apiUrl = "http://localhost:5192/Transacoes/Transferir";

  constructor(private http: HttpClient) { }

  public transferir(TransferenciaRequest: ITransferenciaRequest){
    return this.http.post(this.apiUrl, TransferenciaRequest, {responseType: "text"}).subscribe({
      next: (response)=>{
        console.log("Transferencia concluida com exito!", response);

      },
      error: (error)=>{
        console.log("Transferencia concluida com exito!", error);
      }
    })
  }
}
