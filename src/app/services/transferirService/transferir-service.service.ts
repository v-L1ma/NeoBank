import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TTransferirRequest } from '../../types/TTransferirRequest';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferirServiceService {

  constructor(private httpClient: HttpClient) { }

  transferir(transacaoRequest: TTransferirRequest):Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/Transacoes/transferir`, transacaoRequest)
  }
}
